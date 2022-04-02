//add event listener to slider
let sliderNode = document.querySelector('#slider')
sliderNode = document.addEventListener('input', outputUpdate);

function outputUpdate(e) {
    var value = document.getElementById("slider").value; //slider value
    console.log("function value -> " + value);
    outputNode = document.querySelector('#num-box');
    outputNode.textContent = value;

    //call function to generate square number of boxes
    displayBox(value**2);

}

function displayBox(boxValueReq) {
    //selects the main box. INITIALIZE THE DEFAULT HERE
    grid = document.querySelector('#main-grid');

    childCount = grid.childElementCount

    if (boxValueReq > childCount) {
        //add number of boxes required which is the difference between current and required
        for (; childCount <= boxValueReq; childCount++) {
            box = document.createElement('div');
            box.classList.add('box');
            grid.appendChild(box);
        }
    }
    
    else if (boxValueReq < childCount) {
        //this might not work because box is a newnode, not a childnode...
        for (; childCount >= boxValueReq; childCount--) {
            removeBox = document.querySelector('.box');
            grid.removeChild(removeBox);
        }
    }
}

//initializes initial number of boxes in grid
window.addEventListener('load', (e) => {
    var value = document.getElementById("slider").value;
    console.log("loaded, value = " + value);
    const grid = document.querySelector('#main-grid');
    console.log("child elements = " + grid.childElementCount);

    for (let counter = 0; counter < (value**2); counter++) {
        var box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
});