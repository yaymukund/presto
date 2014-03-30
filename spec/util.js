$.mockjaxSettings.responseTime = 100;

var mockGetPolicy = function(options) {
  var mid, options = $.extend({
    url: 'http://test.host/policyUrl',
    type: 'GET',
    responseText: {},
    response: function(req) { $.mockjaxClear(mid); }
  }, options || {});

  mid = $.mockjax(options);
  return mid;
};

var mockPostBucket = function(options) {
  var mid, options = $.extend({
    url: 'http://test.host/bucketUrl',
    type: 'POST',
    data: {},
    response: function(req) { $.mockjaxClear(mid); }
  }, options || {});

  mid = $.mockjax(options);
  return mid;
};
