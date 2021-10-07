const elasticsearch = require('@elastic/elasticsearch');
const settings = require('pelias-config').generate();

module.exports = function (esClientSettings) {
  return new elasticsearch.Client(esClientSettings ?? settings.esclient ?? {});
};
