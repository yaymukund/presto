import Upload from 'presto/upload';
import Cover from 'presto/cover';
import { config } from 'presto/api';
import { parseMetadata } from 'presto/util';

var Presto = Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: Ember.computed.readOnly('upload.progress'),

  init: function() {
    this._super();

    var deferred = Ember.RSVP.defer(),
        promises = {},
        file = this.get('file');

    var upload = promises.filepath = Upload.create({file: file});
    promises.tags = parseMetadata(file);

    promises.tags.then(function(tags) {
      promises.coverImageUrl = Cover.create(tags);
      return Ember.RSVP.hash(promises);

    }).then(function(results) {
      deferred.resolve({
        artist: results.tags.artist,
        album: results.tags.album,
        title: results.tags.title,
        url: results.filepath,
        coverImageUrl: results.coverImageUrl
      });
    }).catch(deferred.reject);

    this.set('upload', upload);
    this.set('promise', deferred.promise);
  }
});

Presto.reopenClass({
  upload: function(file) {
    return this.create({ file: file, });
  },

  configure: function(options) {
    config.policyUrl = options.policyUrl;
    config.bucketUrl = options.bucketUrl;
  }
});

export default Presto;
