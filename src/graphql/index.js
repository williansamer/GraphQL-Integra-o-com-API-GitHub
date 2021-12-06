const { join } = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const allTypes = loadFilesSync(join(__dirname, 'modules/**/*.graphql'));
const allResolvers = loadFilesSync(join(__dirname, 'modules/**/Resolvers.js'));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = {typeDefs, resolvers};