//add event listener to slider
let sliderNode = document.querySelector('#slider')

//add event listener to main-grid
const mainGridNode = document.querySelector('#main-grid');

mainGridNode.addEventListener('mousedown', coloring);
//NEED TO STOP COLORING WHEN MOUSE BUTTON IS UP

sliderNode.addEventListener('input', outputUpdate);

sliderNode.addEventListener('change', displayBox);

function outputUpdate(e) {
    var value = document.getElementById("slider").value; //slider value
    outputNode = document.querySelector('#num-box');
    outputNode.textContent = value;
}

function displayBox(e) {
    var value = document.getElementById("slider").value;
    var boxValueReq = value ** 2;
    var boxDimension = 500 / value;

    //selects the main box
    grid = document.querySelector('#main-grid');
    childCount = grid.childElementCount
    console.log(childCount);
    if (boxValueReq > childCount) {
        for (; childCount < boxValueReq; childCount++) {
            box = document.createElement('div');
            box.classList.add('box');
            grid.appendChild(box);
        }
    }

    else if (boxValueReq < childCount) {
        for (; childCount > boxValueReq; childCount--) {
            removeBox = document.querySelector('.box');
            grid.removeChild(removeBox);
        }
    }
    //adjust box sizes after all the boxes have been added or subtracted
    boxClass = document.querySelectorAll('.box');
    boxClass.forEach(box => {
        box.style['width'] = boxDimension + "px";
        box.style['height'] = boxDimension + "px";
    });
}

function coloring(e) {
    //on mousedown, add pseudoclass of hover to divs to either cause them to turn black upon hover, OR RGB.
    //condition to check if RGB is enabled
    let RGBCheck = document.querySelector('#rgb').checked;
    //check mousebutton is still down, otherwise return
    if (RGBCheck) {
        //if RGB enabled, color
    }
    else {
        //color boxes black when mouse goes over them
        boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.addEventListener('mouseover', () => box.classList.add('black'))
        });
    }

}


//initializes initial number of boxes in grid
window.addEventListener('load', (e) => {
    var value = document.getElementById("slider").value;
    const grid = document.querySelector('#main-grid');

    for (let counter = 0; counter < (value ** 2); counter++) {
        var box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
});