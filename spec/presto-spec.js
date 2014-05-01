describe('Presto', function() {
  it('defines `upload`', function() {
    expect(Presto.upload).to.be.a('function');
  });

  it('defines `configure`', function() {
    expect(Presto.configure).to.be.a('function');
  });

  it('resolves after uploading', function(done) {
    Presto.upload(testFile).then(function() {
      done();
    });
  });

  it('fails elegantly if the policy request fails', function(done) {
    mockGetPolicy({ textStatus: 'getPolicy failure' });

    Presto.upload(testFile).catch(function(error) {
      expect(error.textStatus).to.be('getPolicy failure');
      done();
    });
  });

  it('fails elegantly if the S3 POST request fails', function(done) {
    mockPostBucket({ textStatus: 'postBucket failure' });

    Presto.upload(testFile).catch(function(error) {
      expect(error.textStatus).to.be('postBucket failure');
      done();
    });
  });

  it('resolves with a null cover', function(done) {
    mockFindTrack({ textStatus: 'findTrack failure' });

    Presto.upload(testFile).then(function(response) {
      expect(response.coverImageUrl).to.be.null;
      done();
    });
  });

  it('fails elegantly if the findCover request fails', function(done) {
    mockFindCover({ textStatus: 'findCover failure' });

    Presto.upload(testFile).then(function(response) {
      expect(response.coverImageUrl).to.be.null;
      done();
    });
  });
});
