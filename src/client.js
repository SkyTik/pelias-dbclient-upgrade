const elasticsearch = require('@elastic/elasticsearch');

module.exports = function() {
  return new elasticsearch.Client({ node: 'http://localhost:9200' });
};
