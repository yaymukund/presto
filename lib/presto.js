var Ember = window.Ember,
    get = Ember.get;

import { fetchPolicyAndUploadFile } from 'presto/util';

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

export default Upload;
