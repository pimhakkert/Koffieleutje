//Koffie box page
let packageSize = null;
let modalOpen = false;
let modal = null;
let modalEditMode = false;
let modalItems = null;
let modalPage = 1;
let totalModalPages = 1;
let detailLinks = null;
let coffeeBox = Array(6).fill(undefined);
let currentBoxIndex = null;
//changes on mobile to 6
let cupsPerPage = 10;

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

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && modalOpen) {
        closeModal();
    }
};

function openModal(elem = null, index = null) {
    //Remember what position to put the cup in
    if(elem === null) {
        currentBoxIndex = index;
    } else if(index === null) {
        currentBoxIndex = elem.getAttribute('data-boxindex');
    } else {
        return;
    }


    document.body.style.overflowY = 'hidden';
    modal.style.display = 'flex';
    modalOpen = true;
}

function closeModal() {
    if(modalEditMode) modalEditMode = false;
    document.body.style.overflowY = 'auto';
    modal.style.display = 'none';
    modalOpen = false;
}

//Show certain amount of capsules in the modal depending on the page
function paginateModal(pageNumber, numOfCapsules) {

    let modal = document.getElementsByClassName('coffee-box-step2-modal-inner-capsules')[0];

    let max = pageNumber*numOfCapsules;
    let min = 0;
    if(pageNumber>1) min = max-numOfCapsules;

    //If there are not enough capsules for the last page, change the for loop iteration length
    if(max>modalItems.length) {
        let removeNumber = numOfCapsules-(modalItems.length%numOfCapsules);
        max -= removeNumber;
    }

    //Decide if the pagination is valid and change pagination arrows if so
    if(pageNumber < 1 || pageNumber > totalModalPages) {
        return;
    }

    modalPage = pageNumber;

    //Check if first page so we can just disable the left pointer
    if(pageNumber === 1) {
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-left')[0].src = location.protocol+'//'+location.host+'/imgs/coffee_box/modal_left_inactive.svg';
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-left')[0].style.pointerEvents = 'none';
    } else {
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-left')[0].src = location.protocol+'//'+location.host+'/imgs/coffee_box/modal_left.svg';
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-left')[0].style.pointerEvents = 'unset';
    }

    if(pageNumber === totalModalPages) {
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-right')[0].src = location.protocol+'//'+location.host+'/imgs/coffee_box/modal_right_inactive.svg';
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-right')[0].style.pointerEvents = 'none';
    } else {
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-right')[0].src = location.protocol + '//' + location.host + '/imgs/coffee_box/modal_right.svg';
        document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-right')[0].style.pointerEvents = 'unset';
    }

    modal.innerHTML = '';

    setPaginateButtonToActive(pageNumber);

    //Create the capsules as HTML and add them into the modal
    for(let i=min;i<max;i++) {
        let modalItem = document.createElement('div');
        modalItem.className = 'cup-item modal-item';

        //Top section
        let cupTop = document.createElement('div');
        cupTop.className = 'cup-item-top';
        modalItem.appendChild(cupTop);

        let cupTopA = document.createElement('a');
        cupTop.appendChild(cupTopA);
        let cupTopADiv = document.createElement('div');
        cupTopA.appendChild(cupTopADiv);

        let cupBackground = document.createElement('img');
        cupBackground.className = 'cup-item-top-background';
        cupBackground.src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/'+modalItems[i].image_name;
        cupTop.appendChild(cupBackground);

        let cupInfoLink = document.createElement('a');
        cupInfoLink.className = 'cup-item-detail-link';
        cupInfoLink.href = location.protocol+'//'+location.host+'/koffie/'+modalItems[i].id;
        cupTop.appendChild(cupInfoLink);

        let cupInfo = document.createElement('img');
        cupInfo.src = location.protocol+'//'+location.host+'/imgs/coffee_box/info.svg';
        cupInfoLink.appendChild(cupInfo);

        let cupSize = document.createElement('img');
        cupSize.className = 'cup-item-top-cupsize';
        cupSize.src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/'+packageSize/6+'.svg';
        cupTop.appendChild(cupSize);

        let cupAdd = document.createElement('div');
        cupAdd.className = 'cup-item-top-add';
        cupTop.appendChild(cupAdd);

        let cupAddImg = document.createElement('img');
        cupAddImg.src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/big_add.svg';
        cupAddImg.className = 'cup-item-top-add-img';

        cupAddImg.addEventListener('click', (e) => {
           addCup(modalItems[i]);
        });

        cupAdd.appendChild(cupAddImg);

        //Bottom section
        let cupBottom = document.createElement('div');
        cupBottom.className = 'cup-item-bottom';
        modalItem.appendChild(cupBottom);

        let cupName = document.createElement('p');
        cupName.innerText = modalItems[i].name;
        cupBottom.appendChild(cupName);

        let cupDescription = document.createElement('p');
        cupDescription.innerText = modalItems[i].description;
        cupBottom.appendChild(cupDescription);

        //Add the cup to the modal
        modal.appendChild(modalItem);
    }
}

//Adds cup to box
function addCup(cupObject) {
    coffeeBox[currentBoxIndex] = cupObject;

    //Build the HTML and add the cupObject id to it
    let boxCup = document.getElementsByClassName('box-index')[currentBoxIndex];
    let boxCupTop = boxCup.firstElementChild;
    let boxCupBottom = boxCup.lastElementChild;

    if(modalEditMode) {

        let topLink = document.getElementsByClassName('cup-item-detail-link')[currentBoxIndex];
        topLink.href = location.protocol+'//'+location.host+'/koffie/'+cupObject.id;

        let backgroundImage = document.getElementsByClassName('cup-item-top-background')[currentBoxIndex];
        backgroundImage.src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/'+cupObject.image_name;

        let botName = document.getElementsByClassName('cup-item-bottom-name')[currentBoxIndex];
        botName.innerText = cupObject.name;

        let botDescription = document.getElementsByClassName('cup-item-bottom-description')[currentBoxIndex];
        botDescription.innerText = cupObject.description;
    } else {
        boxCup.classList.add('active');

        //Set top content
        boxCupTop.removeChild(boxCupTop.firstElementChild);

        let boxCupTopEdit = document.createElement('img');
        boxCupTopEdit.setAttribute('data-index',currentBoxIndex);
        boxCupTopEdit.className = 'cup-item-detail-edit';
        boxCupTopEdit.src = location.protocol+'//'+location.host+'/imgs/coffee_box/edit.svg';

        boxCupTopEdit.addEventListener('click', () => {
            editCup(boxCupTopEdit.getAttribute('data-index'));
        });

        boxCupTop.appendChild(boxCupTopEdit);

        let boxCupTopDetail = document.createElement('a');
        boxCupTopDetail.href = location.protocol+'//'+location.host+'/koffie/'+cupObject.id;
        boxCupTopDetail.className = 'cup-item-detail-link';
        boxCupTop.appendChild(boxCupTopDetail);
        let boxCupTopDetailImg = document.createElement('img');
        boxCupTopDetailImg.src = location.protocol+'//'+location.host+'/imgs/coffee_box/info.svg';
        boxCupTopDetail.appendChild(boxCupTopDetailImg);

        let boxCupTopBackground = document.createElement('img');
        boxCupTopBackground.className = 'cup-item-top-background';
        boxCupTopBackground.src = location.protocol+'//'+location.host+'/imgs/coffee_box/cups/'+cupObject.image_name;
        boxCupTop.appendChild(boxCupTopBackground);

        let boxCupTopCupSize = document.createElement('img');
        boxCupTopCupSize.className = 'cup-item-top-cupsize cupsize';
        boxCupTop.appendChild(boxCupTopCupSize);

        //add right image to boxCupTopCupSize
        setPackageSize(null, packageSize);

        //Set bottom content
        boxCupBottom.style.backgroundColor = 'unset';
        boxCupBottom.style.marginTop = '4px';

        let boxCupBottomName = document.createElement('p');
        boxCupBottomName.classList.add('cup-item-bottom-name');
        boxCupBottomName.innerText = cupObject.name;
        boxCupBottom.appendChild(boxCupBottomName);

        let boxCupBottomDescription = document.createElement('p');
        boxCupBottomDescription.classList.add('cup-item-bottom-description');
        boxCupBottomDescription.innerText = cupObject.description;
        boxCupBottom.appendChild(boxCupBottomDescription);
    }

    boxCup.classList.remove('cup-item-empty');

    //Close modal
    if(modalOpen) closeModal();
}

//changes cup
function editCup(index) {
    modalEditMode = true;
    openModal(null, index);
    coffeeBox[index] = undefined;
}

function setPaginateButtonToActive(page) {
    let allButtons = document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-pages-button');
    for(let i=0;i<allButtons.length;i++) {
        allButtons[i].classList.remove('paginateActive');
    }

    allButtons[page-1].classList.add('paginateActive');
}

function setModalPaginateButtons(totalModalPages) {
    let div = document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-pages')[0];

    //Make the buttons
    for(let i=1;i<totalModalPages+1;i++) {
        let button = document.createElement('div');
        button.className = 'coffee-box-step2-modal-inner-paginate-pages-button';
        div.appendChild(button);

        button.addEventListener('click', () => {
            setPaginateButtonToActive(i);
           paginateModal(i, cupsPerPage);
        });
    }
}

window.addEventListener('load', function() {
    modal = document.getElementsByClassName('coffee-box-step2-modal')[0];
    modal.firstElementChild.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    detailLinks = document.getElementsByClassName('cup-item-detail-link');

    for(let i=0; i<detailLinks.length;i++) {
        detailLinks[i].addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }


    //Close modal when clicking on background
    modal.addEventListener('click', function(e) {
        closeModal();
    });

    //Load capsule choices
    fetch(location.protocol+'//'+location.host+'/api/koffie-box')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            modalItems = data;
            totalModalPages = Math.ceil(data.length/cupsPerPage);

            setModalPaginateButtons(totalModalPages);
            document.getElementsByClassName('coffee-box-step2-modal-inner-paginate-pages-button')[0].classList.add('paginateActive');

            paginateModal(1, cupsPerPage);
            //default size
            setPackageSize(document.getElementsByClassName('popular-choice')[0]);
        });
});
