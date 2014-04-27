import Policy from 'presto/policy';
import S3File from 'presto/s3-file';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: function() {
    return this.get('s3File.progress') || 0;
  }.property('s3File.progress').readOnly(),

  init: function() {
    this._super();

    var self = this,
        promise = new Ember.RSVP.Promise();

    Policy.create({
      policyUrl: self.get('policyUrl')

    }).then(function(policy) {
      var s3File = S3File.create({
        file: self.get('file'),
        policy: policy,
        bucketUrl: self.get('bucketUrl')
      });

      self.set('s3File', s3File);
      return s3File;

    }).then(function(response) {
      var filepath = $(response).find('PostResponse > Location').text();
      promise.resolve(filepath);

    }).catch(function(error) {
      promise.reject(error);
    });

    self.set('promise', promise);
  }
});
