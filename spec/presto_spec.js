describe('Presto', function() {
  describe('.create', function() {
    it('returns a new presto instance', function() {
      expect(Presto.create()).to.be.an('object');
    });
  });

  describe('.uploadFile', function() {
    var presto = Presto.create();
    it('returns a deferred promise', function() {
      expect(presto.uploadFile(null)).to.be.an('object');
    });
  });
});
