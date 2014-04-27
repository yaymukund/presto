import S3File from 'presto/s3-file';

describe('S3File', function() {
  it('initializes with a file, policy, and bucketUrl', function() {
    mockPostBucket();

    var s3File = S3File.create({
      file: testFile,
      policy: {foo: 'bar'},
      bucketUrl: 'http://test.host/bucketUrl'
    });

    expect(s3File).to.be.ok();
  });

  it('errors without a policy', function() {
    expect(function() {
      S3File.create({
        file: testFile,
        bucketUrl: 'http://test.host/bucketUrl'
      });
    }).to.throwError(/policy is required/);
  });

  it('errors without a file', function() {
    expect(function() {
      S3File.create({
        policy: {foo: 'bar'},
        bucketUrl: 'http://test.host/bucketUrl'
      });
    }).to.throwError(/file is required/);
  });

  it('errors without a bucketUrl', function() {
    expect(function() {
      S3File.create({
        policy: {foo: 'bar'},
        file: testFile
      });
    }).to.throwError(/bucketUrl is required/);
  });
});
