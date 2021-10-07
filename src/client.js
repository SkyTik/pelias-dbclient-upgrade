const elasticsearch = require('@elastic/elasticsearch');

module.exports = function (esClientSettings) {
  const config = esClientSettings || { node: 'http://localhost:9200' };
  return new elasticsearch.Client(config);
};
