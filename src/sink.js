
var through = require('through2'),
    BatchManager = require('./BatchManager');

function streamFactory( opts, esClientSettings ){
  opts = opts || {};
  if( !opts.client ){ opts.client = require('./client')(esClientSettings); }

  var manager = new BatchManager( opts );

  var stream = through.obj( function( item, enc, next ){
    manager.push( item, next );
  }, function(next) {
    manager.end(next);
  });

  // export client
  stream.client = opts.client;

  return stream;
}

module.exports = streamFactory;
