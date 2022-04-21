//add event listener to slider
let sliderNode = document.querySelector('#slider')


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
    var boxDimension = 500/value;

    //selects the main box
    grid = document.querySelector('#main-grid');
    childCount = grid.childElementCount
    console.log(childCount);
    if (boxValueReq > childCount) {
        //add number of boxes required which is the difference between current and required. FAULTY LOGIC, IF YOU INCREASE SLIDER AND THEN DECREASE, IT WILL RESULT IN N-1 BOXES
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

//initializes initial number of boxes in grid
window.addEventListener('load', (e) => {
    var value = document.getElementById("slider").value;
    const grid = document.querySelector('#main-grid');

    for (let counter = 0; counter < (value**2); counter++) {
        var box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }
});