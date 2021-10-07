const elasticsearch = require('@elastic/elasticsearch');
const settings = require('pelias-config').generate();

module.exports = function (customSettings) {
  settings.esclient = settings.esclient ?? {};
  return new elasticsearch.Client(customSettings ?? settings.esclient);
};
