var get = Ember.get;

describe('Presto', function() {
  before(function() {
    Presto.reopenClass({
      bucketUrl: 'http://test.host/bucketUrl',
      policyUrl: 'http://test.host/policyUrl'
    });
  });

  it('defines `upload`', function() {
    expect(Presto.upload).to.be.a('function');
  });

  it('lets you retrieve bucketUrl', function() {
    expect(get(Presto, 'bucketUrl')).to.be('http://test.host/bucketUrl');
  });

  it('lets you retrieve policyUrl', function() {
    expect(get(Presto, 'policyUrl')).to.be('http://test.host/policyUrl');
  });

  describe('.upload', function() {
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
});
