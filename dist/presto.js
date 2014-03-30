define("presto", 
  ["presto/util","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = window.Ember,
        get = Ember.get;

    var uploadFile = __dependency1__.uploadFile;

    var Upload = Ember.Object.extend({
      isDone: false,
      isUploading: false,
      progress: 0
    });

    Upload.reopenClass({
      upload: function(file) {
        var upload = this.create({ isUploading: true });

        uploadFile(file, {
          bucketUrl: get(this, 'bucketUrl'),
          policyUrl: get(this, 'policyUrl'),

          progress: function(progress) {
            upload.set('progress', progress);
          },

          success: function(data) {
            upload.setProperties({
              isDone: true,
              isUploading: false
            });
          }
        });

        return upload;
      }
    });

    __exports__["default"] = Upload;
  });
define("presto/util", 
  ["exports"],
  function(__exports__) {
    "use strict";
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

    __exports__.uploadFile = uploadFile;
  });