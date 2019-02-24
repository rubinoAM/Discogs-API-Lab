var discogs = require('disconnect').Client;
var db = new discogs().database();
let config = require('./config');
//console.log(config);

var dis = new discogs({
    consumerKey: config.conKey,
    consumerSecret: config.conSec,
});

//console.log(dis);
/*db.getRelease(13933,(err,results)=>{
    if(err){throw err}
    console.log(results);
})*/

db.getRelease(13933)
    .then((release)=>{
        return db.getArtist(release.artists[0].id);
    })
    .then((artist)=>{
        console.log(artist.name);
    })

db.getArtist(28085,(err,results)=>{
    if(err){throw err}
    console.log(results);
})