import Upload from 'presto/upload';
import { id3 } from 'presto/util';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  progress: Ember.computed.readOnly('upload.progress'),

  init: function() {
    this._super();

    var promise = new Ember.RSVP.Promise,
        promises = {},
        options = this.getProperties('policyUrl', 'bucketUrl', 'file');

    var upload = promises.filepath = Upload.create(options);
    promises.tags = id3(options.file);

    promises.tags.then(function(tags) {
      promises.imageUrl = Spotify.fetchCover(tags.artist, tags.album);
      return Ember.RSVP.hash(promises);

    }).then(function(results) {
      promise.resolve({
        artist: results.tags.artist,
        album: results.tags.album,
        title: results.tags.title,
        url: results.filepath,
        imageUrl: results.imageUrl
      });
    }).catch(function(error) {
      promise.reject(error);
    });

    this.set('upload', upload);
    this.set('promise', promise);
  }
});
