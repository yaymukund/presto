import { getPolicy, uploadFile } from 'presto/api';
import { requireProperty } from 'presto/util';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: 0,

  init: function() {
    this._super();

    var self = this, promise;

    requireProperty(self, 'file');

    promise = getPolicy().then(function(policy) {
      var file = self.get('file');
      return uploadFile(file, policy, function(progress) {
        self.set('progress', progress);
      });
    });

    self.set('promise', promise);
  }
});
