const app_version = "1.0"
const app_title = "Leaderboard"

function set_title(){
    return app_title+' '+app_version
}
document.title = set_title()

const Player = function (row_id) {
    this.row_id = row_id
    document.getElementById("players").appendChild(new RowPlayer(this.row_id))
}

const add_player = document.getElementById("add").addEventListener("click", function(){
    let row_id = document.getElementById("add")
    let current = row_id.getAttribute('value')
    new Player(current)
    let next_id = parseInt(current)+1
    row_id.setAttribute("value", next_id)
})

/* ------- */

class RowPlayer extends HTMLElement {
    constructor(row_id) {
        super();
        this.playerID = row_id

        this.onclick = function(event ){
            if ( ev.target.tagName === "BUTTON" )
            {
                execute_action( event.target.id, this.playerID )
            }
        }

        this.innerHTML = ''+
            '<div id="'+this.playerID+'" class="row mb-1">'+
            '   <div class="col py-1 d-inline-flex">' +
            '       <div class="btn-group me-2" role="group" style="padding-top: 0;">' +
            '           <button id="delete-player" type="button" class="btn btn-sm btn-danger bi-person-dash-fill"></button>' +
            '           <button id="remove-point" type="button" class="btn btn-sm btn-warning bi-dash"></button>' +
            '           <button id="add-point"    type="button" class="btn btn-sm btn-success bi-plus"></button>' +
            '       </div>' +
            '       <div class="input-group">' +
            '           <input type="text" class="form-control">' +
            '           <span class="input-group-text">0</span>'+
            '       </div>' +
            '   </div>' +
            '</div>'

        const execute_action = function( target , playerID  ) {
            console.log( target, playerID )

        }

    }
}
customElements.define('new-player', RowPlayer)

