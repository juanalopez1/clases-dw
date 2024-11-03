import {
  FastifyPluginAsyncTypebox,
  Type,
} from "@fastify/type-provider-typebox";
import { IdUsuarioSchema } from "../../../../types/usuario.js";
import { FileSchema } from "../../../../types/file.js";
import path from "path";
import fs from "fs";

export default (async (fastify) => {
  fastify.put("/", {
    onRequest: [fastify.verifyJWT, fastify.verifySelf],
    schema: {
      consumes: ["multipart/form-data"],
      params: IdUsuarioSchema,
      body: Type.Object({
        photo: FileSchema,
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
      const userId = request.params.id_usuario.toString();

      const filePath = path.join(process.cwd(), "src", "public", userId);

      await fs.promises.writeFile(filePath, request.body.photo.file);

      return reply.code(200).send({ filename: userId });
    },
  });
}) satisfies FastifyPluginAsyncTypebox;
