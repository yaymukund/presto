import { queryStringFor } from 'presto/util';
import { config } from 'presto/api';

var mockGetPolicy = function(options) {
  var _options = { textStatus: 'success', response: {}, jqXHR: {} };
  if (options) { $.extend(_options, options); }
  ic.ajax.defineFixture('http://test.host/policyUrl', _options);
};

var mockPostBucket = function(options) {
  var _options = { textStatus: 'success', response: {}, jqXHR: {} };
  if (options) { $.extend(_options, options); }
  ic.ajax.defineFixture('http://test.host/bucketUrl', _options);
};

var mockFindTrack = function(options) {
  var _options = {
    textStatus: 'success',
    response: {
      info: { num_results: 1 },
      tracks: [{ href: 'track:12345abcde' }]
    },
    jqXHR: {}
  };

  if (options) { $.extend(_options, options); }
  ic.ajax.defineFixture(config.SPOTIFY_TRACK_SEARCH_URL, _options);
};

var mockFindCover = function(options) {
  var _options = {
    textStatus: 'success',
    response: { thumbnail_url: 'http://foo.test/cover/image.jpg' },
    jqXHR: {}
  };

  if (options) { $.extend(_options, options); }
  ic.ajax.defineFixture(config.SPOTIFY_OEMBED_URL, _options);
};

afterEach(function() {
  ic.ajax.__fixtures__ = {};
});

beforeEach(function() {
  mockGetPolicy();
  mockPostBucket();
  mockFindTrack();
  mockFindCover();
});
