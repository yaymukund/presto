var Ember = window.Ember,
    get = Ember.get;

import { uploadFile } from 'presto/util';

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

export default Upload;
