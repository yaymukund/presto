import Cover from 'presto/cover';

describe('Cover', function() {
  it('succeeds with valid track information', function(done) {
    mockFindCover({response: { thumbnail_url: 'http://test.url/cover/img.jpg' }});

    Cover.create({
      artist: 'Polygon Window',
      album: 'Surfing on Sine Waves',
      title: '[untitled]'
    }).then(function(imgUrl) {
      expect(imgUrl).to.be('http://test.url/300/img.jpg');
      done();
    });
  });

  it('fails if the track search returned no results', function(done) {
    mockFindTrack({response: {info: {num_results: 0}}});
    Cover.create({
      artist: 'Polygon Window',
      album: 'Surfing on Sine Waves',
      title: 'Quoth'
    }).catch(function(error) {
      expect(error.message).to.match(/Found 0 tracks matching/);
      done();
    });
  });

  it('fails if the track search fails', function(done) {
    mockFindTrack({textStatus: 'failure'});
    Cover.create({
      artist: 'Tim Hecker',
      album: 'Virgins',
      title: 'Live Room'
    }).catch(function(error) {
      done();
    });
  });

  it('fails if the cover search fails', function(done) {
    mockFindCover({textStatus: 'failure'});
    Cover.create({
      artist: 'Pinback',
      album: 'Autumn of the Seraphs',
      title: 'Walters'
    }).catch(function(error) {
      done();
    });
  });

});
