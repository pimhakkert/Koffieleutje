function setPackageSize(elem = null, size = null) {
    let buttons = document.getElementsByClassName('coffee-box-step1-buttons-button');

    if(elem != null) {
        packageSize = parseInt(elem.getAttribute('data-packagesize'));
        for(let i=0; i<buttons.length; i++) {
            buttons[i].classList.remove('button-active');
        }
        elem.classList.add('button-active');
    } else if(size != null) {
        packageSize = size;
    }

    //Set all sizes
    let cupsizes = document.getElementsByClassName('cup-item-top-cupsize');
    for(let i=0; i<cupsizes.length; i++) {
        cupsizes[i].src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/'+packageSize/6+'.svg';
    }
}

//Disable next step until box is filled
function tryNextStep() {
    //Cart/box IS full
    if(isArrayFull(cupArray))
    {
        document.getElementsByClassName('coffee-box-step2-selection-text')[0].classList.add('next-step-available');
    }
    else {
        document.getElementsByClassName('coffee-box-step2-selection-text')[0].classList.remove('next-step-available');
    }
}
