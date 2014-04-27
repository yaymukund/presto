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
    id3(file, function(err, tags) {
      if (err) {
        reject(err);
      } else {
        resolve(tags);
      }
    });
  });
};

export { parseMetadata, constructFormData };
