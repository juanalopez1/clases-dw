import {
    FastifyPluginAsyncTypebox,
    Type,
} from "@fastify/type-provider-typebox";
import path from "path";
import fs from "fs";

export default (async (fastify) => {
    fastify.put("/", {
        schema: {
            consumes: ["multipart/form-data"],
            body: Type.Object({
                photo: Type.Unsafe<Buffer>(),
            }),
            response: {
                200: Type.Object({ filename: Type.String() }),
                401: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    message: Type.String(),
                }),
                400: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    message: Type.String(),
                }),
            },
        },
        handler: async function (request, reply) {
            fastify.log.info(request.body.photo);
            const filename = "shared_picture";

            const filePath = path.join(
                process.cwd(),
                "src",
                "public",
                filename
            );

            await fs.promises.writeFile(filePath, request.body.photo);

            return reply.code(200).send({ filename });
        },
    });
}) satisfies FastifyPluginAsyncTypebox;
