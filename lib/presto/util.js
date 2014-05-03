import id3 from 'presto/id3';

var constructFormData = function(data, policy) {
  var fd = new FormData();

  $.each(policy, function(name, value) {
    fd.append(name, value);
  });

  fd.append('file', data);
  return fd;
};

var parseMetadata = function(file) {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    id3({file: file, type: id3.OPEN_FILE}, function(err, tags) {
      if (err) {
        reject(err);
      } else {
        resolve(tags);
      }
    });
  });
};

var requireProperty = function(object, name) {
  var value = object.get(name);

  if (Ember.isBlank(value)) {
    throw new Error(
      'Property '+name+' is required to initialize '+Ember.inspect(object)
    );
  }
};

var queryStringFor = function(tags) {
  var query = [];

  if (tags.title) { query.push('title:"%@"'.fmt(tags.title)); }
  if (tags.album) { query.push('album:"%@"'.fmt(tags.album)); }
  if (tags.artist) { query.push('artist:"%@"'.fmt(tags.artist)); }

  return query.join('+').replace(/\0/g, '');
};

export {
  parseMetadata,
  constructFormData,
  requireProperty,
  queryStringFor
};
