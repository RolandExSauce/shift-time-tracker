import { GraphQLScalarType, GraphQLScalarValueParser } from "graphql";
import dayjs from "dayjs";
import { Kind } from "graphql/language";
import { GraphQLUpload } from "graphql-upload-ts";

export const dateScalar = new GraphQLScalarType({
  name: "Date",
  parseValue(value) {
    return dayjs(value as any); // value from the client
  },
  serialize(value) {
    return dayjs(value as any).format("YYYY-MM-DDTHH:mm"); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return dayjs(ast.value); // ast value is always in string format
    }
    return null;
  },
});

export const uploadScalar = new GraphQLScalarType({
  name: "Upload",
  serialize(value: any) {
    const { fileBits, fileName, options } = value;
    return new File(fileBits, fileName, options) as any; // value sent to the client
  },
  parseValue(value: any) {
    const { fileBits, fileName, options } = value;
    return new File(fileBits, fileName, options) as any; // value from the client
  },

  parseLiteral(value: any) {
    const { fileBits, fileName, options } = value;
    return new File(fileBits, fileName) as any;
  },
});
