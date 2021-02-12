class BlindTestPlayer extends HTMLElement {

    static get observedAttributes() {
        return ["start", "increment", "current" ]
    }

    constructor (value) {
        super()
        this.playerid = value
        this.innerHTML = '<div id="'+ this.playerid +'" class="input-group my-1">'+
            '<button type="button" id="add" class="btn btn-success">+</button>' +
            '<input type="text" class="form-control" id="playername">'+
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





