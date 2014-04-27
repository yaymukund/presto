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
});
