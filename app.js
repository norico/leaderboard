class BlindTestPlayer extends HTMLElement {

    static get observedAttributes() {
        return ["start", "increment", "current" ]
    }

    constructor (value) {
        super()
        this.playerid = value
        this.innerHTML =  '<div id="'+ this.playerid +'" class="input-group my-1">'+
            '<button type="button" onclick="scoring('+ this.playerid +', \'remove\' )" class="btn btn-warning">-</button>' +
            '<button type="button" onclick="scoring('+ this.playerid +', \'add\' )" class="btn btn-success">+</button>' +
            '<input type="text" class="form-control" id="playername">' +
            '<span class="input-group-text" id="score">0</span>'+
            '</div>'
    }
    attributeChangedCallback (name, oldValue, newValue) {
        if (name === 'current' && oldValue !== newValue) {
            console.log( name )
        }

    }
}
customElements.define('blindtest-player', BlindTestPlayer)

/*  ------  */

document.querySelector("#addPlayer").addEventListener('click', function(){
    const container = document.getElementById("main")
    const counterElement  = document.getElementById("addPlayer")
    let counter = parseInt(counterElement.getAttribute('value'))
    container.appendChild( new BlindTestPlayer(counter) )
    newCounter = counter+1
    counterElement.setAttribute("value", newCounter )
})


function scoring(id, action){
    let maxpoints = 20;
    let current_player = id
    let score = document.getElementById(id).children.namedItem('score')
    let playername = document.getElementById(id).children.namedItem('playername').value
    let current_score = parseInt(score.innerHTML)
    let new_score = current_score

    if ( action === 'add' && current_score < maxpoints ){
        new_score = current_score+1
    }
    if ( action === 'remove' && current_score >0 ){
        new_score = current_score-1
    }
    score.innerHTML = new_score

    if ( new_score === maxpoints ){
        // TODO : Winner panel 
    }



}

/*
function add(id){

    let new_score = current_score+1
    if ( new_score <= 20  ) {
        score.innerHTML = new_score
    }
    else {
        alert( 'Winner is ' + playername.innerHTML )
    }
}

function remove(id){
    const current_player = id
    const score = document.getElementById(id).children.namedItem('score')
    let current_score = parseInt(score.innerHTML)
    let new_score = current_score-1
    if ( new_score >= 0  ) {
        score.innerHTML = new_score
    }

}
*/



