import { findTrack, findCover } from 'presto/api';
import { queryStringFor, requireProperties } from 'presto/util';

export default Ember.Object.extend(Ember.PromiseProxyMixin, {
  query: function() {
    return queryStringFor(
      this.getProperties('title', 'artist', 'album')
    );
  }.property('title', 'artist', 'album'),

  init: function() {
    this._super();

    var query = this.get('query'),
        promise = new Ember.RSVP.Promise(function(resolve, reject) {
          findTrack(query)
            .then(findCover)
            .then(resolve)
            .catch(function(error) {
              resolve(null);
            });
        });

    this.set('promise', promise);
  }
});
