//Mobile menu
let mobileMenuOpen = false;

document.getElementsByClassName('topmenu-mobile')[0].addEventListener('click',() => {
    toggleMobileMenu();
});

let mobileMenu = document.getElementsByClassName('mobile-menu')[0];
let mobileMenuHamburger = document.getElementsByClassName('hamburger--slider')[0];

function toggleMobileMenu() {
    if(mobileMenuOpen) {
        mobileMenuHamburger.classList.remove('is-active');
        mobileMenu.style.left = '-110%';
        document.body.style.overflowY = 'auto';
        mobileMenuOpen = false;
    } else {
        mobileMenuHamburger.classList.add('is-active');
        mobileMenu.style.left = '0';
        document.body.style.overflowY = 'hidden';
        mobileMenuOpen = true;
    }
}

//Mobile mode
let mobileMode = false;
checkScreenSize();

//When screen resizes, run check again
window.onresize = checkScreenSize;

function checkScreenSize() {

    //Mobile mode
    if(screen.width < 1100) {
        mobileMode = true;
        return;
    }
    mobileMode = false;
}



//LocalStorage cup array
let cupArray;

function loadCupArray() {
    if(getCupArray() === null) cupArray = Array(6).fill(undefined);
    else cupArray = getCupArray();

    makeProxy();
    tryNextStep();
    if(isArrayFull(cupArray)) mobileCartFull();

    if(mobileMode)  {
        editMobileCartButtonContent();
        for(let i=0;i<cupArray.length;i++) {
            if(cupArray[i] !== null && cupArray[i] !== undefined) {
                fillMobileCart(i, cupArray);
            }
        }
    }
    else {
        for(let i=0;i<cupArray.length;i++) {
            if(cupArray[i] !== null && cupArray[i] !== undefined) {
                fillBox(i, cupArray[i]);
            }
        }
    }
}

function makeProxy() {
    // First we make a proxy for our array. This acts as a listener for any changes in the array
    cupArray = new Proxy(cupArray, {
        //Intercept the set function (arr[x] = '1') and inject methods to log and save the array to localStorage
        set: function(target, property, value, receiver) {
            let currentValue = target[property];

            target[property] = value;

            //If we're adding a cup
            if(currentValue === undefined || currentValue === null) {
                cupArrayAdd(property, value);
            }

            //If we're changing a cup
            if(currentValue !== undefined && currentValue !== null) {
                cupArrayEdit(property, value);
            }

            tryNextStep();
            return true;
        }
    });
}

function isArrayFull( arr ) {
    for ( let i = 0, l = arr.length; i < l; i++ )
    {
        if ( 'undefined' == typeof arr[i] || null === arr[i] )
        {
            return false
        }
    }
    return true;
}

function cupArrayAdd(index, value) {
    console.log('adding!');

    saveCupArray();
}

function cupArrayEdit(index, value) {
    console.log('editing!');

    saveCupArray();
}

function saveCupArray() {
    localStorage.setItem('cupArray',JSON.stringify(cupArray));
}

function getCupArray() {
    if(localStorage.getItem('cupArray') === null) return null;
    return JSON.parse(localStorage.getItem('cupArray'));
}
