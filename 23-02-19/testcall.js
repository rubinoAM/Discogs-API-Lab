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

/* db.getRelease(13933)
    .then((release)=>{
        return db.getArtist(release.artists[0].id);
    })
    .then((artist)=>{
        console.log(artist.name);
    }) */

/* db.getArtist(28085,(err,results)=>{
    if(err){throw err}
    console.log(results);
}) */

/* db.getArtistReleases(28085,(err,results)=>{
    if(err){throw err}
    for(let i=0;i<results.releases.length;i++){
        console.log(results.releases[i].title);
    }
}) */

db.getArtistReleases(133866,(err,results)=>{
    if(err){throw err}
    for(let i=0;i<results.releases.length;i++){
        if(results.releases[i].year < 2000 && results.releases[i].artist === 'UGK'){
            console.log(results.releases[i]);
            //console.log(results.releases[i].title + "- " + results.releases[i].year);
        }
    }
});