class BlindTestPlayer extends HTMLElement {

    static get observedAttributes() {
        return ["start", "increment", "current" ]
    }

    constructor (value=1) {
        super()
        this.playerid = value
        this.innerHTML = '<div id="'+ this.playerid +'" class="input-group my-1">'+
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
    let counter = counterElement.getAttribute('value')
    container.appendChild( new BlindTestPlayer(counter) )
    counter = counter++
    counterElement.setAttribute("value", counter.toString() )


})






