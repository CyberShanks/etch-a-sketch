//displays no. of boxes selected by slider
function outputUpdate(vol) {
    document.querySelector('#num-box').value = vol;
    //slider value is buggy. if you move slider up and down then more and more boxes keep on being generated. Also, initially no boxes are generated.
/*OnChange vs OnInput... I think OnChange needs to be used, and the number of boxes that need to be generated should come from how many the user has selected through the slider.*/
    


    container = document.querySelector('#main-grid');
    //create box and style it
    box = document.createElement('div');
    //add class to it
    box.classList.add('box');
    for (let index = 0; index < vol; index++) {
        container.appendChild(box);
    }
}


