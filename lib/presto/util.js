var RSVP = window.Ember.RSVP,
    $ = window.jQuery;

var fetchPolicy = function(policyUrl) {
  return new RSVP.Promise(function(resolve, reject) {
    $.getJSON(policyUrl).done(resolve).fail(reject);
  });
};

var constructFormData = function(data, policy) {
  var fd = new FormData();

  $.each(policy, function(name, value) {
    fd.append(name, value);
  });

  fd.append('file', data);
  return fd;
};

var uploadFile = function(options) {
  return $.ajax({
    type: 'POST',
    processData: false,
    contentType: false,
    data: constructFormData(options.file, options.policy),
    url: options.bucketUrl,
    xhr: function() {
      var xhr = $.ajaxSettings.xhr();

      if (options.progress) {
        xhr.upload.onprogress = function(evt) {
          var progress = (evt.loaded / evt.total) * 100;
          options.progress(progress);
        }
      }

      return xhr;
    }
  });
};

var fetchPolicyAndUploadFile = function(file, options) {
  var deferred = RSVP.defer();

  fetchPolicy(options.policyUrl)
    .then(function(policy) {
      uploadFile({
        bucketUrl: options.bucketUrl,
        policy: policy,
        file: file,
        progress: options.progress
      }).done(function(data) {
        deferred.resolve(data);
      })

    }).catch(function(error) {
      deferred.reject(error);
    });

  return deferred.promise;
};

export { fetchPolicyAndUploadFile };
