import {
  FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";
import { IdUsuarioSchema } from "../../types/usuario.js";
import { BinarySchema } from "../../types/file.js";
import fs from "fs";
import path from "path";

export default (async (fastify) => {
  fastify.get("/:id_usuario", {
    schema: {
      params: IdUsuarioSchema,
      response: {
        200: BinarySchema,
      },
    },
    handler: async function (request, reply) {
      const filePath = path.join(
        process.cwd(),
        "src",
        "public",
        request.params.id_usuario.toString()
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
