const maxpoints = 3;
const pointText = (maxpoints > 1) ? ' points' : ' point'

document.querySelector("#reset").addEventListener('click', function(){
    document.querySelectorAll("span#score").forEach(e => { e.innerHTML = "0" })
})

document.querySelector("#addPlayer").addEventListener('click', function(){
    const container = document.getElementById("main")
    const counterElement  = document.getElementById("addPlayer")
    let counter = parseInt(counterElement.getAttribute('value'))
    container.appendChild( new BlindTestPlayer(counter) )
    newCounter = counter+1
    counterElement.setAttribute("value", newCounter )
})

const info     = document.createElement("small")
const infoText = document.createTextNode(maxpoints + pointText)

info.classList.add("text-muted", "align-self-center", "pt-4", 'me-2' )

info.appendChild(infoText)
document.getElementById("title").appendChild(info)

function remove(id){
    document.getElementById(id).parentNode.remove()
}

function scoring(id, action){
    let current_player = id
    let score = document.getElementById(id).children.namedItem('score')
    let playername = document.getElementById(id).children.namedItem('playername').value
    let current_score = parseInt(score.innerHTML)
    let new_score = current_score
    if ( action === 'add' && current_score < maxpoints && playername != "" ){
        new_score = current_score+1
        console.log("Add point to " + playername )
    }
    if ( action === 'remove' && current_score >0 ){
        new_score = current_score-1
        console.log("Remove point to " + playername )
    }
    score.innerHTML = new_score
    if ( new_score === maxpoints ){
        const WinnerPlayer = document.getElementsByClassName('modal-body')
        WinnerPlayer[0].innerHTML = '<p class="text-center fs-3">'+playername+'</p>'
        const Winner = new bootstrap.Modal(document.getElementById('winner'), {
            backdrop: true
        })
        Winner.show();
    }

    let close = document.getElementById('modal-reset')
    close.addEventListener("click", function(){
        document.querySelectorAll("span#score").forEach(e => { e.innerHTML = "0" })
    })


}

class BlindTestPlayer extends HTMLElement {
    constructor (value) {
        super()
        this.playerid = value
        this.innerHTML =  '<div id="'+ this.playerid +'" class="input-group my-1">'+
            '<button type="button" onclick="remove('+ this.playerid +')" class="btn btn-danger">x</button>' +
            '<button type="button" onclick="scoring('+ this.playerid +', \'remove\' )" class="btn btn-warning">-</button>' +
            '<button type="button" onclick="scoring('+ this.playerid +', \'add\' )" class="btn btn-success">+</button>' +
            '<input type="text" class="form-control" id="playername" placeholder="New player">' +
            '<span class="input-group-text" id="score">0</span>'+
            '</div>'
    }
}
customElements.define('blindtest-player', BlindTestPlayer)