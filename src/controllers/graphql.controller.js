const { graphqlKoa } = require('graphql-server-koa');
const schema = require('../graphql/data/schema');

const GraphQLOptions = {

  schema: schema,
  debug: true

  // values to be used as context and rootValue in resolvers
  // context?: any,
  // rootValue?: any,

  // // function used to format errors before returning them to clients
  // formatError?: Function,

  // // additional validation rules to be applied to client-specified queries
  // validationRules?: Array < ValidationRule >,

  // // function applied for each query in a batch to format parameters before passing them to `runQuery`
  // formatParams?: Function,

  // // function applied to each response before returning data to clients
  // formatResponse?: Function,

  // a boolean option that will trigger additional debug logging if execution errors occur
  // debug?: boolean
};

function handler() {
  return graphqlKoa(() => GraphQLOptions);
}

module.exports = {
  handler
};
