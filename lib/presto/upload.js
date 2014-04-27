import Policy from 'presto/policy';
import S3File from 'presto/s3-file';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: function() {
    return this.get('s3File.progress') || 0;
  }.property('s3File.progress').readOnly(),

  init: function() {
    this._super();

    var self = this,
        deferred = new Ember.RSVP.defer();

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
      deferred.resolve(filepath);

    }).catch(function(error) {
      deferred.reject(error);
    });

    self.set('promise', deferred.promise);
  }
});
