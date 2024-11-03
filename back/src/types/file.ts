import { MultipartFile } from "@fastify/multipart";
import { Static, TUnsafe, Type } from "@sinclair/typebox";

export const FileSchema = Type.Object(
    {
        filename: Type.String(),
        mimetype: Type.String(),
        file: Type.Unsafe<MultipartFile["file"]>(),
        toBuffer: Type.Unsafe<MultipartFile["toBuffer"]>(),
    } satisfies { [K in keyof MultipartFile]?: TUnsafe<MultipartFile[K]> },
    { additionalProperties: false }
);
export type ParsedFile = Static<typeof FileSchema>;

export const BinarySchema = Type.Unsafe<Buffer>();
