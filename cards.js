const cards = document.querySelectorAll('.card');
// selecting all cards



// dragging logic for the cards

const onDragStart = (event) => {
    console.log("Dragging the element");
    // when dragging event starts, log it
    event.dataTransfer.setData('id',event.target.id);
    
    setTimeout( () => {
        event.target.style.visibility = 'hidden';
    }, 50);
}

const onDragEnd = (event) => {
    event.target.style.visibility = 'visible';
    console.log("Ended the drag");
}

// cards is an array with each card element in the HTML file
cards.forEach((card) => {
    // hard-coding what the behaviour of the elements would be
    // when we start and finish dragging them
    card.ondragstart = onDragStart;
    card.ondragend = onDragEnd;
})


