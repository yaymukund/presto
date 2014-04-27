var DEFAULT_RESPONSE = {
  response: {},
  jqXHR: {},
  textStatus: 'success'
};

var mockGetPolicy = function(options) {
  options = $.extend({}, DEFAULT_RESPONSE, options);
  ic.ajax.defineFixture('http://test.host/policyUrl', options);
};

var mockPostBucket = function(options) {
  options = $.extend({}, DEFAULT_RESPONSE, options);
  ic.ajax.defineFixture('http://test.host/bucketUrl', options);
};

afterEach(function() {
  ic.ajax.__fixtures__ = {};
});
