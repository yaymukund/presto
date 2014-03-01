describe('Presto', function() {
  $.mockjaxSettings.responseTime = 100;

  describe('.create', function() {
    it('returns a new presto instance', function() {
      expect(Presto.create({
        bucketUrl: 'foo',
        policyUrl: 'bar'
      })).to.be.an('object');
    });

    it('requires a bucketUrl', function() {
      expect(function() { Presto.create({policyUrl: 'foo'}); }).to.throwError();
    });

    it('requires a policyUrl', function() {
      expect(function() { Presto.create({bucketUrl: 'foo'}); }).to.throwError();
    });
  });

  describe('.uploadFile', function() {
    var presto = Presto.create({
      bucketUrl: 'http://test.host/bucketUrl',
      policyUrl: 'http://test.host/policyUrl'
    });

    it('returns a deferred promise', function() {
      expect(presto.uploadFile(null)).to.be.an('object');
    });

    it('tries to hit policyUrl', function(done) {
      var mid = mockGetPolicy({
        response: function(req) {
          $.mockjaxClear(mid);
          expect(req.url).to.equal('http://test.host/policyUrl');
          done();
        }
      });

      presto.uploadFile(null);
    });

    it('tries to hit bucketUrl', function(done) {
      mockGetPolicy();

      var mid = mockPostBucket({
        response: function(req) {
          $.mockjaxClear(mid);
          done();
        }
      });

      presto.uploadFile('music');
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

      presto.uploadFile('music');
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
