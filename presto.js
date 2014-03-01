// http://caolanmcmahon.com/posts/writing_for_node_and_the_browser/
(function(exports, $, RSVP) {
  exports.create = function(options) {
    var presto = Object.create(this);

    if (!options || !options.bucketUrl || !options.policyUrl) {
      throw new Error('`create` expects bucketUrl and policyUrl options.');
    }

    presto.options = options;
    return presto;
  };

  exports.uploadFile = function(file) {
    var deferred = RSVP.defer(),
        self = this;

    this.fetchPolicy().then(function(token) {
      var fd = constructFormData(file, token);

      $.ajax({
        url: self.options.bucketUrl,
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) {
          deferred.resolve(data);
        }
      });
    }).catch(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  };

  exports.fetchPolicy = function() {
    var self = this;

    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(self.options.policyUrl)
       .done(resolve)
       .fail(reject);
    });
  };

  var constructFormData = function(file, options) {
    var fd = new FormData();

    $.each(options, function(name, value) {
      fd.append(name, value);
    });

    fd.append('file', file);
    return fd;
  };

  return exports;
})(typeof exports === 'undefined' ? this['Presto'] = {} : exports, jQuery, RSVP);
