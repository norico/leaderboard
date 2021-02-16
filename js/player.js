export default class Player extends HTMLElement
{
    constructor(row_id, maxpoints) {
        super()
        this.playerID = row_id
        this.maxpoints = maxpoints

        this.onclick = function(event ){
            if ( event.target.tagName === "BUTTON" )
            {
                this.player_field_SCORE = this.score
                this.player_field_NAME = this.inputname
                execute_action( event.target.id, this.playerID, this.player_field_NAME, this.player_field_SCORE, maxpoints )
            }
        }
        const execute_action = function( action , playerID, player_field_NAME, player_field_SCORE, maxpoints ) {

            if ( action ==="delete"){
                const line = document.getElementById(playerID)
                line.remove()
                return
            }
            if ( player_field_NAME.value === ""){
                let  newPlayerName = prompt("Enter player name")
                player_field_NAME.value = newPlayerName
            }
            let score = parseInt(player_field_SCORE.innerText)

            if ( action ==="add" && score < maxpoints ){
                score += 1
                player_field_SCORE.innerText = score
            }
            if ( action ==="remove" && score > 0 ){
                score -= 1
                player_field_SCORE.innerText = score
            }
            if( score === maxpoints) {
                alert( "Winner is ! " + player_field_NAME.value )
                // TODO : Make bootstrap popin
            }
        }
        this.setAttribute("id", this.playerID)
        this.div_col = document.createElement('div')
        this.div_col.classList.add('col', 'd-inline-flex')
        this.btndanger = document.createElement('button')
        this.btndanger.setAttribute('type', 'button')
        this.btndanger.setAttribute('id', 'delete')
        this.btndanger.setAttribute('tabindex', '-1')
        this.btndanger.classList.add('btn', 'btn-sm', 'btn-danger', 'bi', 'bi-x')
        this.btnwanrning = document.createElement('button')
        this.btnwanrning.setAttribute('type', 'button')
        this.btnwanrning.setAttribute('id', 'remove')
        this.btnwanrning.setAttribute('tabindex', '-1')
        this.btnwanrning.classList.add('btn', 'btn-sm', 'btn-warning', 'bi', 'bi-dash')
        this.btnsuccess = document.createElement('button')
        this.btnsuccess.setAttribute('type', 'button')
        this.btnsuccess.setAttribute('id', 'add')
        this.btnsuccess.setAttribute('tabindex', '-1')
        this.btnsuccess.classList.add('btn', 'btn-sm', 'btn-success', 'bi', 'bi-plus')
        this.btngroup = document.createElement('div')
        this.btngroup.classList.add('btn-group', 'btn-group-sm', 'me-2')
        this.btngroup.appendChild(this.btndanger)
        this.btngroup.appendChild(this.btnwanrning)
        this.btngroup.appendChild(this.btnsuccess)
        this.inputname = document.createElement('input')
        this.inputname.classList.add('form-control')
        this.inputname.setAttribute('name', 'player')
        this.score = document.createElement('span')
        this.score.classList.add('input-group-text', 'text-end', 'fw-bold')
        this.score.setAttribute('style', 'display:block; min-width:2.8rem')
        this.score.setAttribute('id', 'score')
        this.score.innerHTML = 0;
        this.inputgroup = document.createElement('div')
        this.inputgroup.classList.add('input-group')
        this.inputgroup.appendChild(this.inputname)
        this.inputgroup.appendChild(this.score)
        this.div_row = document.createElement('div')
        this.div_row.classList.add('row', 'pb-2')
        this.div_col.appendChild(this.btngroup)
        this.div_col.appendChild(this.inputgroup)
        this.div_row.appendChild(this.div_col)
        this.appendChild(this.div_row)
    }
}
