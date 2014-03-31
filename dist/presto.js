define("presto", 
  ["presto/util","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = window.Ember,
        get = Ember.get;

    var fetchPolicyAndUploadFile = __dependency1__.fetchPolicyAndUploadFile;

    var Upload = Ember.Object.extend(Ember.PromiseProxyMixin, {
      progress: 0
    });

    Upload.reopenClass({
      upload: function(file) {
        var upload = this.create();

        var promise = fetchPolicyAndUploadFile(file, {
          bucketUrl: get(this, 'bucketUrl'),
          policyUrl: get(this, 'policyUrl'),
          progress: function(progress) {
            upload.set('progress', progress);
          }
        });

        upload.set('promise', promise);
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
          if (options.progress) {
            var xhr = $.ajaxSettings.xhr();
            xhr.upload.onprogress = function(evt) {
              var progress = (evt.loaded / evt.total) * 100;
              options.progress(progress);
            }
          }
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

    __exports__.fetchPolicyAndUploadFile = fetchPolicyAndUploadFile;
  });