(function() {
  var artists = ['Led Zeppelin', 'ACDC', 'Rolling Stones'],
    artistTemplate = _.template(
      '<% _.each(artists, function(artist, index, artists) { %>' +
        '<li><%= artist %></li>' +
      '<% }); %>'
    ),
    content = artistTemplate({
      artists: artists
    });

var container = document.createElement('ol');
container.innerHTML = content;
document.body.appendChild(container);
 
})();
