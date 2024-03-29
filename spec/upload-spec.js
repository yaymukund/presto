describe('an upload instance', function() {
  before(function() {
    Presto.configure({
      bucketUrl: 'http://test.host/bucketUrl',
      policyUrl: 'http://test.host/policyUrl'
    });
  });

  it('does not set isSettled if the POST hasn\'t returned', function() {
    mockGetPolicy();
    mockFindTrack();
    var upload = Presto.upload(testFile);
    expect(upload.get('isSettled')).to.be(false);
  });

  it('sets isSettled if the POST returns', function(done) {
    mockGetPolicy();
    mockPostBucket();
    mockFindTrack();

    var upload = Presto.upload(testFile);

    upload.then(function() {
      expect(upload.get('isSettled')).to.be(true);
      done();
    })
  });

  it('sets isPending when uploading', function() {
    mockGetPolicy();
    var upload = Presto.upload(testFile);
    expect(upload.get('isPending')).to.be(true);
  });

  it('unsets isPending when the POST returns', function(done) {
    mockGetPolicy();
    mockPostBucket();

    var upload = Presto.upload(testFile);

    upload.then(function() {
      expect(upload.get('isPending')).to.be(false);
      done();
    });
  });
});
