import 'id3';

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
    id3({file: file, type: 'file'}, function(err, tags) {
      if (err) {
        reject(err);
      } else {
        resolve(tags);
      }
    });
  });
};

var requireProperties = function(object, names) {
  names.forEach(function(name) {
    requireProperty(object, name);
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

export {
  parseMetadata,
  constructFormData,
  requireProperty,
  requireProperties
}
