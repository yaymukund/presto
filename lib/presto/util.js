var RSVP = window.Ember.RSVP,
    $ = window.jQuery,

    UPLOAD_OPTIONS = {
      type: 'POST',
      processData: false,
      contentType: false,
    };

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

var uploadFile = function(file, options) {
  fetchPolicy(options.policyUrl).then(function(policy) {
    var fd = constructFormData(file, policy);

    var ajaxOptions = $.extend({
      data: fd,
      url: options.bucketUrl,

      xhr: function() {
        var xhr = $.ajaxSettings.xhr();
        xhr.upload.onprogress = function(evt) {
          var progress = (evt.loaded / evt.total) * 100;
          options.progress(progress);
        }
      },

      success: function(data) {
        options.success(data);
      }
    }, UPLOAD_OPTIONS);

    $.ajax(ajaxOptions);
  });
};

export { uploadFile };
