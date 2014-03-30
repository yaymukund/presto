describe('an upload instance', function() {
  before(function() {
    Presto.reopenClass({
      bucketUrl: 'http://test.host/bucketUrl',
      policyUrl: 'http://test.host/policyUrl'
    });
  });

  it('does not set isDone if the POST hasn\'t returned', function() {
    mockGetPolicy();
    var upload = Presto.upload('test12');
    expect(upload.get('isDone')).to.be(false);
  });

  it('sets isDone if the POST returns', function() {
    mockGetPolicy();

    var mid = mockPostBucket({
      response: function(req) {
        $.mockjaxClear(mid);
        expect(upload.get('isDone')).to.be(true);
        done();
      }
    });

    var upload = Presto.upload('test12');
  });

  it('sets isUploading when uploading', function() {
    mockGetPolicy();
    var upload = Presto.upload('test12');
    expect(upload.get('isUploading')).to.be(true);
  });

  it('unsets isUploading when the POST returns', function() {
    mockGetPolicy();

    var mid = mockPostBucket({
      response: function(req) {
        $.mockjaxClear(mid);
        expect(upload.get('isUploading')).to.be(false);
        done();
      }
    });

    var upload = Presto.upload('test12');
  });
});
