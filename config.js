//add event listener to slider
let sliderNode = document.querySelector('#slider')
sliderNode = document.addEventListener('input', outputUpdate);





function outputUpdate(e) {
    //
    var value = document.getElementById("slider").value;
    console.log(value);
    outputNode = document.querySelector('#num-box');
    outputNode.textContent = value;
    //slider value is buggy. if you move slider up and down then more and more boxes keep on being generated. Also, initially no boxes are generated.
/*OnChange vs OnInput... I think OnChange needs to be used, and the number of boxes that need to be generated should come from how many the user has selected through the slider.*/
    


    container = document.querySelector('#main-grid');
    //create box and style it
    box = document.createElement('div');
    //add class to it
    box.classList.add('box');
    //get current number of boxes, and then compare that with the value on the slider, and then add or subtract boxes accordingly
    for (let index = 0; index < value; index++) {
        container.appendChild(box);
    }
}


