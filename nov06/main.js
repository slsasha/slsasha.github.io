let cards = document.getElementById(`cards`);

let number = document.getElementById(`number`)

number.addEventListener(`change`, function(){
    dc(this.value)
})
function dc(nc){
    let ch = ``;
    for(i=0;i<nc;i++){
        ch += `<div class="card">
        <div class="card-body">
        <p class="card-text">Card ${i+1}</p>
        </div>
    </div>`


    }
cards.innerHTML = ch;
ae();
}

function ae(){
    const cards = document.querySelectorAll(`.card`);

    cards.forEach(function(card){
        card.addEventListener(`click`, function(){
            this.classList.add(`anim-card`)


        })

    })

}