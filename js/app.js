import {Config} from './config.js'
import Player from './player.js'
import Storage from './storage.js'

customElements.define('new-player', Player);

let pointText = (Config.max_points > 1 ) ? ' points' : ' point'
document.title = Config.title

document.querySelector("#title").innerHTML = Config.title
document.querySelector("#max_points").innerHTML = 'Round in '+Config.max_points+pointText

document.querySelector('#add').addEventListener('click', function(){
    let counter_players = this.getAttribute('value')
    document.getElementById("players").appendChild( new Player(counter_players, Config.max_points))
    counter_players = parseInt(counter_players)
    this.setAttribute('value', counter_players+1)
});
document.querySelector('#reset').addEventListener('click', function(){
    document.querySelectorAll("span#score").forEach(e => { e.innerHTML = "0" })
});


document.querySelector('#sort').addEventListener('click', function(){
    // TODO : Sorting

})



if( Config.storage === true) {
    // TODO : Local Storage
    /*
    customElements.define('top-player', Storage);
    document.querySelector('#top-players').appendChild( new Storage() );
    */
}