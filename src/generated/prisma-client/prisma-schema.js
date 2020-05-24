module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLike {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWebsite {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Like {
  id: ID!
  website: Website!
  user: User!
}

type LikeConnection {
  pageInfo: PageInfo!
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  id: ID
  website: WebsiteCreateOneWithoutLikesInput!
  user: UserCreateOneWithoutLikesInput!
}

input LikeCreateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutWebsiteInput {
  create: [LikeCreateWithoutWebsiteInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutUserInput {
  id: ID
  website: WebsiteCreateOneWithoutLikesInput!
}

input LikeCreateWithoutWebsiteInput {
  id: ID
  user: UserCreateOneWithoutLikesInput!
}

type LikeEdge {
  node: Like!
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
}

type LikePreviousValues {
  id: ID!
}

input LikeScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LikeScalarWhereInput!]
  OR: [LikeScalarWhereInput!]
  NOT: [LikeScalarWhereInput!]
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
  AND: [LikeSubscriptionWhereInput!]
  OR: [LikeSubscriptionWhereInput!]
  NOT: [LikeSubscriptionWhereInput!]
}

input LikeUpdateInput {
  website: WebsiteUpdateOneRequiredWithoutLikesInput
  user: UserUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateManyWithoutWebsiteInput {
  create: [LikeCreateWithoutWebsiteInput!]
  delete: [LikeWhereUniqueInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutWebsiteInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutWebsiteInput!]
  deleteMany: [LikeScalarWhereInput!]
}

input LikeUpdateWithoutUserDataInput {
  website: WebsiteUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateWithoutWebsiteDataInput {
  user: UserUpdateOneRequiredWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutUserDataInput!
}

input LikeUpdateWithWhereUniqueWithoutWebsiteInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutWebsiteDataInput!
}

input LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutUserDataInput!
  create: LikeCreateWithoutUserInput!
}

input LikeUpsertWithWhereUniqueWithoutWebsiteInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutWebsiteDataInput!
  create: LikeCreateWithoutWebsiteInput!
}

input LikeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  website: WebsiteWhereInput
  user: UserWhereInput
  AND: [LikeWhereInput!]
  OR: [LikeWhereInput!]
  NOT: [LikeWhereInput!]
}

input LikeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLike(data: LikeCreateInput!): Like!
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWebsite(data: WebsiteCreateInput!): Website!
  updateWebsite(data: WebsiteUpdateInput!, where: WebsiteWhereUniqueInput!): Website
  updateManyWebsites(data: WebsiteUpdateManyMutationInput!, where: WebsiteWhereInput): BatchPayload!
  upsertWebsite(where: WebsiteWhereUniqueInput!, create: WebsiteCreateInput!, update: WebsiteUpdateInput!): Website!
  deleteWebsite(where: WebsiteWhereUniqueInput!): Website
  deleteManyWebsites(where: WebsiteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  like(where: LikeWhereUniqueInput!): Like
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  website(where: WebsiteWhereUniqueInput!): Website
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website]!
  websitesConnection(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WebsiteConnection!
  node(id: ID!): Node
}

type Subscription {
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  website(where: WebsiteSubscriptionWhereInput): WebsiteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  websites(where: WebsiteWhereInput, orderBy: WebsiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Website!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  websites: WebsiteCreateManyWithoutPostedByInput
  likes: LikeCreateManyWithoutUserInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLikesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  websites: WebsiteCreateManyWithoutPostedByInput
}

input UserCreateWithoutWebsitesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  likes: LikeCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  websites: WebsiteUpdateManyWithoutPostedByInput
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutWebsitesInput {
  create: UserCreateWithoutWebsitesInput
  update: UserUpdateWithoutWebsitesDataInput
  upsert: UserUpsertWithoutWebsitesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLikesDataInput {
  name: String
  email: String
  password: String
  websites: WebsiteUpdateManyWithoutPostedByInput
}

input UserUpdateWithoutWebsitesDataInput {
  name: String
  email: String
  password: String
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutWebsitesInput {
  update: UserUpdateWithoutWebsitesDataInput!
  create: UserCreateWithoutWebsitesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  websites_every: WebsiteWhereInput
  websites_some: WebsiteWhereInput
  websites_none: WebsiteWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Website {
  id: ID!
  url: String!
  description: String!
  postedBy: User
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type WebsiteConnection {
  pageInfo: PageInfo!
  edges: [WebsiteEdge]!
  aggregate: AggregateWebsite!
}

input WebsiteCreateInput {
  id: ID
  url: String!
  description: String!
  postedBy: UserCreateOneWithoutWebsitesInput
  likes: LikeCreateManyWithoutWebsiteInput
}

input WebsiteCreateManyWithoutPostedByInput {
  create: [WebsiteCreateWithoutPostedByInput!]
  connect: [WebsiteWhereUniqueInput!]
}

input WebsiteCreateOneWithoutLikesInput {
  create: WebsiteCreateWithoutLikesInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteCreateWithoutLikesInput {
  id: ID
  url: String!
  description: String!
  postedBy: UserCreateOneWithoutWebsitesInput
}

input WebsiteCreateWithoutPostedByInput {
  id: ID
  url: String!
  description: String!
  likes: LikeCreateManyWithoutWebsiteInput
}

type WebsiteEdge {
  node: Website!
  cursor: String!
}

enum WebsiteOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type WebsitePreviousValues {
  id: ID!
  url: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input WebsiteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WebsiteScalarWhereInput!]
  OR: [WebsiteScalarWhereInput!]
  NOT: [WebsiteScalarWhereInput!]
}

type WebsiteSubscriptionPayload {
  mutation: MutationType!
  node: Website
  updatedFields: [String!]
  previousValues: WebsitePreviousValues
}

input WebsiteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WebsiteWhereInput
  AND: [WebsiteSubscriptionWhereInput!]
  OR: [WebsiteSubscriptionWhereInput!]
  NOT: [WebsiteSubscriptionWhereInput!]
}

input WebsiteUpdateInput {
  url: String
  description: String
  postedBy: UserUpdateOneWithoutWebsitesInput
  likes: LikeUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateManyDataInput {
  url: String
  description: String
}

input WebsiteUpdateManyMutationInput {
  url: String
  description: String
}

input WebsiteUpdateManyWithoutPostedByInput {
  create: [WebsiteCreateWithoutPostedByInput!]
  delete: [WebsiteWhereUniqueInput!]
  connect: [WebsiteWhereUniqueInput!]
  set: [WebsiteWhereUniqueInput!]
  disconnect: [WebsiteWhereUniqueInput!]
  update: [WebsiteUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [WebsiteUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [WebsiteScalarWhereInput!]
  updateMany: [WebsiteUpdateManyWithWhereNestedInput!]
}

input WebsiteUpdateManyWithWhereNestedInput {
  where: WebsiteScalarWhereInput!
  data: WebsiteUpdateManyDataInput!
}

input WebsiteUpdateOneRequiredWithoutLikesInput {
  create: WebsiteCreateWithoutLikesInput
  update: WebsiteUpdateWithoutLikesDataInput
  upsert: WebsiteUpsertWithoutLikesInput
  connect: WebsiteWhereUniqueInput
}

input WebsiteUpdateWithoutLikesDataInput {
  url: String
  description: String
  postedBy: UserUpdateOneWithoutWebsitesInput
}

input WebsiteUpdateWithoutPostedByDataInput {
  url: String
  description: String
  likes: LikeUpdateManyWithoutWebsiteInput
}

input WebsiteUpdateWithWhereUniqueWithoutPostedByInput {
  where: WebsiteWhereUniqueInput!
  data: WebsiteUpdateWithoutPostedByDataInput!
}

input WebsiteUpsertWithoutLikesInput {
  update: WebsiteUpdateWithoutLikesDataInput!
  create: WebsiteCreateWithoutLikesInput!
}

input WebsiteUpsertWithWhereUniqueWithoutPostedByInput {
  where: WebsiteWhereUniqueInput!
  update: WebsiteUpdateWithoutPostedByDataInput!
  create: WebsiteCreateWithoutPostedByInput!
}

input WebsiteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  postedBy: UserWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [WebsiteWhereInput!]
  OR: [WebsiteWhereInput!]
  NOT: [WebsiteWhereInput!]
}

input WebsiteWhereUniqueInput {
  id: ID
}
`
      }
    