import { Static, Type } from "@sinclair/typebox";

export const FileSchema = Type.Object(
    {
        _buf: Type.Unsafe<Buffer>(),
    },
    { additionalProperties: false }
);
export type ParsedFile = Static<typeof FileSchema>;

export const BinarySchema = Type.Unsafe<Buffer>();
