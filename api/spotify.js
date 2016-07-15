var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
  clientId : 'acbe0fe4c28d442082a36af605de153d',
  clientSecret : '684a895f030f469f9ca091ae4a352503',
  redirectUri : 'http://juken.herokuapp.com/callback'
})

module.exports = spotify