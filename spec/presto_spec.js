var get = Ember.get;

describe('Presto', function() {
  $.mockjaxSettings.responseTime = 100;

  it('defines `upload`', function() {
    expect(Presto.upload).to.be.a('function');
  });

  it('lets you set bucketUrl', function() {
    Presto.reopenClass({bucketUrl: 'http://test.host/bucketUrl'});
    expect(get(Presto, 'bucketUrl')).to.be('http://test.host/bucketUrl');
  });

  it('lets you set policyUrl', function() {
    Presto.reopenClass({policyUrl: 'http://test.host/policyUrl'});
    expect(get(Presto, 'policyUrl')).to.be('http://test.host/policyUrl');
  });

  describe('.upload', function() {
    before(function() {
      Presto.reopenClass({
        bucketUrl: 'http://test.host/bucketUrl',
        policyUrl: 'http://test.host/policyUrl'
      });
    });

    it('tries to hit policyUrl', function(done) {
      var mid = mockGetPolicy({
        response: function(req) {
          $.mockjaxClear(mid);
          expect(req.url).to.equal('http://test.host/policyUrl');
          done();
        }
      });

      Presto.upload(null);
    });

    it('tries to hit bucketUrl', function(done) {
      mockGetPolicy();

      var mid = mockPostBucket({
        response: function(req) {
          $.mockjaxClear(mid);
          done();
        }
      });

      Presto.upload('music');
    });

    it('sends formdata to the bucketUrl', function(done) {
      mockGetPolicy();

      var mid = mockPostBucket({
        response: function(req) {
          $.mockjaxClear(mid);
          expect(req.data).to.be.a(FormData);
          done();
        }
      });

      Presto.upload('music');
    });
  });

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
});
