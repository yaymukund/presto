import request from 'ic-ajax';
import { constructFormData } from 'presto/util';

var config = {
  SPOTIFY_TRACK_SEARCH_URL: 'http://ws.spotify.com/search/1/track',
  SPOTIFY_OEMBED_URL: 'https://embed.spotify.com/oembed'
};

var getPolicy = function() {
  return request({
    type: 'GET',
    url: config.policyUrl,
    dataType: 'json'
  });
};

var uploadFile = function(file, policy, onprogress) {
  var deferred = Ember.RSVP.defer();

  return request({
    type: 'POST',
    processData: false,
    contentType: false,
    data: constructFormData(file, policy),
    url: config.bucketUrl,
    xhr: function() {
      var xhr = $.ajaxSettings.xhr();

      xhr.upload.onprogress = function(evt) {
        var progress = (evt.loaded / evt.total) * 100;
        onprogress(progress);
      }

      return xhr;
    }

  }).then(function(response) {
    var filepath = $(response).find('PostResponse > Location').text();
    deferred.resolve(filepath);

  }).catch(function(error) {
    deferred.reject(error);
  });

  return deferred.promise;
};

var findTrack = function(query) {
  var deferred = Ember.RSVP.defer();

  request({
    type: 'GET',
    dataType: 'json',
    url: config.SPOTIFY_TRACK_SEARCH_URL,
    data: {q: query}

  }).then(function(response) {
    if (response.info.num_results > 0) {
      var href = response.tracks[0].href;
      deferred.resolve(href);

    } else {
      deferred.reject(
        new Error("Found 0 tracks matching '%@'.".fmt(query))
      );
    }
  }).catch(deferred.reject);

  return deferred.promise;
};

var findCover = function(track) {
  var deferred = Ember.RSVP.defer();

  request({
    type: 'GET',
    dataType: 'jsonp',
    url: config.SPOTIFY_OEMBED_URL,
    data: {url: track}
  }).then(function(response) {
    var imageUrl = response.thumbnail_url.replace('cover', '300');
    deferred.resolve(imageUrl);
  }).catch(deferred.reject);

  return deferred.promise;
};

export {
  config,
  getPolicy,
  uploadFile,
  findTrack,
  findCover
};
