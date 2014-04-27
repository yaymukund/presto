import Upload from 'presto/upload';
import { parseMetadata } from 'presto/util';

var Presto = Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: Ember.computed.readOnly('upload.progress'),

  init: function() {
    this._super();

    var deferred = Ember.RSVP.defer(),
        promises = {},
        options = this.getProperties('policyUrl', 'bucketUrl', 'file');

    var upload = promises.filepath = Upload.create(options);
    promises.tags = parseMetadata(options.file);

    promises.tags.then(function(tags) {
      // promises.imageUrl = Spotify.fetchCover(tags.artist, tags.album);
      return Ember.RSVP.hash(promises);

    }).then(function(results) {
      deferred.resolve({
        artist: results.tags.artist,
        album: results.tags.album,
        title: results.tags.title,
        url: results.filepath,
        imageUrl: results.imageUrl
      });
    }).catch(function(error) {
      deferred.reject(error);
    });

    this.set('upload', upload);
    this.set('promise', deferred.promise);
  }
});

Presto.reopenClass({
  upload: function(file) {
    return this.create({
      file: file,
      policyUrl: this.policyUrl,
      bucketUrl: this.bucketUrl
    });
  }
});

export default Presto;
