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
let mobileMode = null;
checkFirstScreenSize();

//When screen resizes, run check again
window.onresize = checkScreenSize;
function checkFirstScreenSize() {
    let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if(width < 1100) {
        mobileMode = true;
    }
    else
    {
        mobileMode = false;
    }
}

//Reload page when necessary
function checkScreenSize() {
    let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if(width < 1100 && !mobileMode)
    {
        window.location.href = window.location.href;
    }
    else if(width >= 1100 && mobileMode)
    {
        window.location.href = window.location.href;
    }
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
                addToMobileCart(cupArray[i], true);
            }
        }
    }
    else {
        for(let i=0;i<cupArray.length;i++) {
            if(cupArray[i] !== null && cupArray[i] !== undefined) {
                addToBox(i, cupArray[i]);
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

            //If we're deleting a cup
            if(currentValue !== undefined && (value === null || value === undefined))
            {
                saveCupArray();
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
    saveCupArray();
}

function cupArrayEdit(index, value) {
    saveCupArray();
}

function saveCupArray() {
    localStorage.setItem('cupArray',JSON.stringify(cupArray));
}

function getCupArray() {
    if(localStorage.getItem('cupArray') === null) return null;
    return JSON.parse(localStorage.getItem('cupArray'));
}
