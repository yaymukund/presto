var Ember = window.Ember;

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
      bucketUrl: this.get('bucketUrl'),

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
