"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Website",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Like",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/shuto-kikuchi-63fbf8/graphql-prisma-sample/dev`
});
exports.prisma = new exports.Prisma();
