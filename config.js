//add event listener to slider
const sliderNode = document.querySelector('#slider')

//add event listener to main-grid
const mainGridNode = document.querySelector('#main-grid');

//add event listener to clear button
const clearBtn = document.querySelector('#clr');

clearBtn.addEventListener('click', () => {
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style['background-color'] = 'white';
    });
});

mainGridNode.addEventListener('mousedown', coloring);
mainGridNode.addEventListener('mouseup', () => {
    mainGridNode.removeEventListener('mouseover', blackColor);
    mainGridNode.removeEventListener('mouseover', rgbColor);
});

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

function coloring() {
    //on mousedown, add pseudoclass of hover to divs to either cause them to turn black upon hover, OR RGB.
    //condition to check if RGB is enabled
    let RGBCheck = document.querySelector('#rgb').checked;
    //check mousebutton is still down, otherwise return
    if (RGBCheck) {
        mainGridNode.addEventListener('mouseover',  rgbColor);
    }
    else {
        // add event listerer to parent, when hover, event bubbles and then we check the target
        mainGridNode.addEventListener('mouseover',  blackColor, {
            once: false //false so that you can keep on coloring while mouse is down. Do not need to specify, this is the default value
        });
    }
}

function rgbColor(e) {
    var colorCommand = getColor();
    if (e.target.matches('.box')) {
        e.target.style['background-color'] = colorCommand; 
    }
}

function getColor(){ 
    // return "hsl(" + 360 * Math.random() + ',' +
    //            (25 + 70 * Math.random()) + '%,' + 
    //            (85 + 10 * Math.random()) + '%)'

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

function blackColor(e) {
        if (e.target.matches('.box')) {
            e.target.style['background-color'] = 'black'; 
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