import {
    FastifyPluginAsyncTypebox,
    Type,
} from "@fastify/type-provider-typebox";
import { BinarySchema } from "../../types/file.js";
import fs from "fs";
import path from "path";

export default (async (fastify) => {
    fastify.get("/:filename", {
        schema: {
            params: Type.Object({
                filename: Type.String(),
            }),
            response: {
                200: BinarySchema,
            },
        },
        handler: async function (request, reply) {
            const filePath = path.join(
                process.cwd(),
                "src",
                "public",
                request.params.filename
            );

            try {
                const file = await fs.promises.readFile(filePath);
                return reply.code(200).send(file);
            } catch {
                const filePath = path.join(
                    process.cwd(),
                    "src",
                    "public",
                    "default.jpeg"
                );
                const defaultFile = await fs.promises.readFile(filePath);
                return reply.code(200).send(defaultFile);
            }
        },
    });
}) satisfies FastifyPluginAsyncTypebox;
