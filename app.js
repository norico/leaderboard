
var $increase = $('.increase');
var $decrease = $('.decrease');


$increase.click(function() {
    var _inc = +$(this).prev().val() + 1;
    $(this).prev().val(_inc);
});

$decrease.click(function() {
    var _dec = +$(this).prevAll('input').val() -1;
    if( $(this).prevAll('input').val() > 0 ) {
        $(this).prevAll('input').val(_dec);
    }
});

/*

class BlintestPlayer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = '<button class="btn btn-danger" >x</button><button id="decrement" class="btn btn-warning" >-</button><input type="text" class="mx-1" name="player-name"></input><button-counter value="0" increment="1">+</button-counter><span class="value"></span>'
    }
}
if (!customElements.get('blindtest-player')) {
    customElements.define('blindtest-player', BlintestPlayer)
}

const container = document.querySelector('.container')

document.querySelector("#add").addEventListener('click', function(){
    container.appendChild( new BlintestPlayer() )
})




class ButtonCounter extends HTMLElement {
    connectedCallback() {
        this._value = parseInt(this.getAttribute('value'));
        this._increment = parseInt(this.getAttribute('increment'));
        this.innerHTML = `<button class="btn btn-success" >${ this._value }</button>`;
        this.addEventListener('click', () => this.onButtonClick());
    }
    onButtonClick() {
        this._value += this._increment;
        this.querySelector('button').textContent = this._value;
    }



}

if (!customElements.get('button-counter')) {
    customElements.define('button-counter', ButtonCounter);
}

 */