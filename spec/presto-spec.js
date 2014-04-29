describe('Presto', function() {
  it('defines `upload`', function() {
    expect(Presto.upload).to.be.a('function');
  });

  it('defines `configure`', function() {
    expect(Presto.configure).to.be.a('function');
  });
});
