import Policy from 'presto/policy';

describe('Policy', function() {
  it('can be imported correctly', function() {
    expect(Policy).to.be.ok();
  });

  it('fails without a policyUrl', function() {
    expect(function() {
      Policy.create();
    }).to.throwError(/policyUrl is required/);
  });

  it('succeeds with a policyUrl', function(done) {
    mockGetPolicy({response: 'fake policy'});

    Policy.create({
      policyUrl: 'http://test.host/policyUrl'

    }).then(function(policy) {
      expect(policy).to.be('fake policy');
      done();
    });
  });
});
