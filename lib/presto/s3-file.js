import request from 'ic-ajax';
import { constructFormData } from 'presto/util';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: 0,
  init: function() {
    var self = this,
        file = self.get('file'),
        policy = self.get('policy'),
        bucketUrl = self.get('bucketUrl'),
        promise;

    promise = request({
      type: 'POST',
      processData: false,
      contentType: false,
      data: constructFormData(file, policy),
      url: bucketUrl,
      xhr: function() {
        var xhr = $.ajaxSettings.xhr();

        xhr.upload.onprogress = function(evt) {
          var progress = (evt.loaded / evt.total) * 100;
          self.set('progress', progress);
        }

        return xhr;
      }
    });

    this.set('promise', promise);
  }
});
