const rows = document.querySelectorAll('.row');
// selecting all row elements
const colors = ['lightyellow','yellow','orange','orangered','red'];
// setting colors

const pictFrequencies = {
    "monroe":2,
    "krishna":3,
    "blue":6
};


const onDragOver = (event) => {
    event.preventDefault(); // cancel default behaviour
}

const onDrop = (event) => {
    event.preventDefault();
    const draggedCardId = event.dataTransfer.getData('id');
    // get the data that's labelled "ID"
    const draggedCard = document.getElementById(draggedCardId);
    event.target.appendChild(draggedCard);
    // append the card as a child to the row
    console.log(`Current ID is ${event.dataTransfer.getData('id')}`);
    console.log("Dropped the element");
}


rows.forEach((row,index) => {
    // setting the behaviour for each row
        //const label = row.querySelector('.rank');
        //label.style.backgroundColor = colors[index];
    // setting the drag-drop functionalities
    row.ondragover =onDragOver;
    row.ondrop = onDrop;
})




// After the tier-listing is complete!
const nextSlide = document.querySelector("#go");

function goToNextSlide() {
    cards.forEach((card) => {
        card.draggable=false;
        // so as to prevent post-submission tampering
    })

    console.log("Card position locked!");

    // checking if the inputs are all valid
    for(row of rows){
        if (row.childElementCount == 1) {
            window.alert("Please fill in all the rankings.");
            window.location.reload();
            break;
        }
        else if(row.childElementCount > 2){
            window.alert("Only one image per rank.");
            window.location.reload();
            break;
        }
    }

    rows.forEach((row, index) => {
        var div = document.createElement("div");
        div.class="results";
        div.innerHTML = "Hello";
        row.appendChild(div);
    })
    /**
    * in case we decide to sort again
    var sortedCards = countRanks();
    console.log(sortedCards);
    */
}

function countRanks(){
    var sortedCards = []
    rows.forEach((row) => {
        if (row.children.length > 2){
            window.alert('Only one image per ranking. Please refresh and try again.');
        }
        else {
            // append the only image div onto the thing
            sortedCards.push(row.children[1]);
        }
    })
    return sortedCards;
}

nextSlide.onclick = goToNextSlide; // when button is clicked


// image stuff
const pictures = document.querySelectorAll("img");
pictures.forEach((pic)=>{
    pic.style.pointerEvents = 'none';
    // so that the picture doesn't move on its own
})