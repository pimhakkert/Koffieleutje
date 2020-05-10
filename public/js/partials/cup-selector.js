let oldCupSelectors;
let cupSelectors;
let cupsPerPage;

//old stuff
let packageSize = null;
let cupSelectorModalOpen = false;
let modalEditMode = false;
let cupSelectorItems = null;
let cupSelectorPage = 1;
let totalCupSelectorPages = 1;
let detailLinks = null;
let coffeeBox = Array(6).fill(undefined);
let currentBoxIndex = null;
//end old stuff

window.onload = (event) => {
    oldCupSelectors = document.getElementsByClassName('cup-selector-old');
    cupSelectors = document.getElementsByClassName('cup-selector');

    if (mobileMode) {
        for (let i = 0; i < oldCupSelectors.length; i++) oldCupSelectors[i].style.display = 'none';
        for (let i = 0; i < cupSelectors.length; i++) {
            cupSelectors[i].classList.add('cup-selector-mobile');
            cupSelectors[i].classList.remove('cup-selector-modal');
        }
        cupsPerPage = 6;
    } else {
        for (let i = 0; i < oldCupSelectors.length; i++) oldCupSelectors[i].style.display = 'flex';
        for (let i = 0; i < cupSelectors.length; i++) {
            cupSelectors[i].classList.remove('cup-selector-mobile');
            cupSelectors[i].classList.add('cup-selector-modal');
            cupSelectors[i].firstElementChild.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
        cupsPerPage = 10;
    }

    loadCapsules();

    detailLinks = document.getElementsByClassName('cup-item-detail-link');

    for (let i = 0; i < detailLinks.length; i++) {
        detailLinks[i].addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    for (let i = 0; i < cupSelectors.length; i++) {
        cupSelectors[i].addEventListener('click', function (e) {
            if(e.target !== this) return;
            closeModal();
        });
    }

    loadCupArray();
};

function loadCapsules() {
    fetch(location.protocol + '//' + location.host + '/api/koffie-box')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            cupSelectorItems = data;

            totalCupSelectorPages = Math.ceil(data.length / cupsPerPage);

            setCupSelectorModalPaginateButtons(totalCupSelectorPages);
            document.getElementsByClassName('cup-selector-inner-paginate-pages-button')[0].classList.add('paginateActive');

            paginateSelector(1, cupsPerPage);
            //default size
            setPackageSize(document.getElementsByClassName('popular-choice')[0]);
        });
}

//Place the loaded cups into the cup selector
function placeCupInSelector(cup, cupSelector) {
    let cupSelectorItem = document.createElement('div');
    cupSelectorItem.className = 'cup-item modal-item';

    //Top section
    let cupTop = document.createElement('div');
    cupTop.className = 'cup-item-top';
    cupSelectorItem.appendChild(cupTop);

    let cupTopA = document.createElement('a');
    cupTop.appendChild(cupTopA);
    let cupTopADiv = document.createElement('div');
    cupTopA.appendChild(cupTopADiv);

    let cupBackground = document.createElement('img');
    cupBackground.className = 'cup-item-top-background';
    cupBackground.src = location.protocol + '//' + location.host + '/imgs/coffee_box/cups/' + cup.image_name;
    cupTop.appendChild(cupBackground);

    let cupInfoLink = document.createElement('a');
    cupInfoLink.className = 'cup-item-detail-link';
    cupInfoLink.href = location.protocol + '//' + location.host + '/koffie/' + cup.id;
    cupTop.appendChild(cupInfoLink);

    let cupInfo = document.createElement('img');
    cupInfo.src = location.protocol + '//' + location.host + '/imgs/coffee_box/info.svg';
    cupInfoLink.appendChild(cupInfo);

    let cupSize = document.createElement('img');
    cupSize.className = 'cup-item-top-cupsize';
    cupSize.src = location.protocol + '//' + location.host + '/imgs/coffee_box/cups/' + packageSize / 6 + '.svg';
    cupTop.appendChild(cupSize);

    let cupAdd = document.createElement('div');
    cupAdd.className = 'cup-item-top-add';
    cupTop.appendChild(cupAdd);

    let cupAddImg = document.createElement('img');
    cupAddImg.src = location.protocol + '//' + location.host + '/imgs/coffee_box/cups/big_add.svg';
    cupAddImg.className = 'cup-item-top-add-img';

    cupAddImg.addEventListener('click', (e) => {
        if(modalEditMode) addOrEditCup(true, currentBoxIndex, cup);
        else addOrEditCup(false, currentBoxIndex, cup);
    });

    cupAdd.appendChild(cupAddImg);

    //Bottom section
    let cupBottom = document.createElement('div');
    cupBottom.className = 'cup-item-bottom';
    cupSelectorItem.appendChild(cupBottom);

    let cupName = document.createElement('p');
    cupName.innerText = cup.name;
    cupBottom.appendChild(cupName);

    let cupDescription = document.createElement('p');
    cupDescription.innerText = cup.description;
    cupBottom.appendChild(cupDescription);

    //Add the cup to the modal
    cupSelector.appendChild(cupSelectorItem);
}

//Show certain amount of capsules in the modal depending on the page
function paginateSelector(pageNumber, numOfCapsules) {

    let cupSelector = document.getElementsByClassName('cup-selector-inner-capsules')[0];

    let max = pageNumber * numOfCapsules;
    let min = 0;
    if (pageNumber > 1) min = max - numOfCapsules;

    //If there are not enough capsules for the last page, change the for loop iteration length
    if (max > cupSelectorItems.length) {
        let removeNumber = numOfCapsules - (cupSelectorItems.length % numOfCapsules);
        max -= removeNumber;
    }

    //Decide if the pagination is valid and change pagination arrows if so
    if (pageNumber < 1 || pageNumber > totalCupSelectorPages) {
        return;
    }

    cupSelectorPage = pageNumber;

    //Check if first page so we can just disable the left pointer
    if (pageNumber === 1) {
        document.getElementsByClassName('cup-selector-inner-paginate-left')[0].src = location.protocol + '//' + location.host + '/imgs/coffee_box/modal_left_inactive.svg';
        document.getElementsByClassName('cup-selector-inner-paginate-left')[0].style.pointerEvents = 'none';
    } else {
        document.getElementsByClassName('cup-selector-inner-paginate-left')[0].src = location.protocol + '//' + location.host + '/imgs/coffee_box/modal_left.svg';
        document.getElementsByClassName('cup-selector-inner-paginate-left')[0].style.pointerEvents = 'unset';
    }

    if (pageNumber === totalCupSelectorPages) {
        document.getElementsByClassName('cup-selector-inner-paginate-right')[0].src = location.protocol + '//' + location.host + '/imgs/coffee_box/modal_right_inactive.svg';
        document.getElementsByClassName('cup-selector-inner-paginate-right')[0].style.pointerEvents = 'none';
    } else {
        document.getElementsByClassName('cup-selector-inner-paginate-right')[0].src = location.protocol + '//' + location.host + '/imgs/coffee_box/modal_right.svg';
        document.getElementsByClassName('cup-selector-inner-paginate-right')[0].style.pointerEvents = 'unset';
    }

    cupSelector.innerHTML = '';

    setPaginateButtonToActive(pageNumber);

    //Create the capsules as HTML and add them into the modal
    for (let i = min; i < max; i++) {
        placeCupInSelector(cupSelectorItems[i], cupSelector);
    }
}

//Set class of new CupSelector pagination button
function setPaginateButtonToActive(page) {
    let allButtons = document.getElementsByClassName('cup-selector-inner-paginate-pages-button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('paginateActive');
    }

    allButtons[page - 1].classList.add('paginateActive');
}

//Make the CupSelector paginate buttons
function setCupSelectorModalPaginateButtons(totalCupSelectorPages) {
    let div = document.getElementsByClassName('cup-selector-inner-paginate-pages')[0];

    //Make the buttons
    for (let i = 1; i < totalCupSelectorPages + 1; i++) {
        let button = document.createElement('div');
        button.className = 'cup-selector-inner-paginate-pages-button';

        let buttonNumber = document.createElement('p');
        buttonNumber.innerText = i;

        button.appendChild(buttonNumber);
        div.appendChild(button);

        button.addEventListener('click', () => {
            setPaginateButtonToActive(i);
            paginateSelector(i, cupsPerPage);
        });
    }
}

//Open the modal version of the cupSelector
function openModal(elem = null, index = null) {
    //Remember what position to put the cup in
    if (elem === null) {
        currentBoxIndex = index;
    } else if (index === null) {
        currentBoxIndex = elem.getAttribute('data-boxindex');
    } else {
        return;
    }

    document.body.style.overflowY = 'hidden';
    cupSelectors[0].style.display = 'flex';
    cupSelectorModalOpen = true;
}

//Close the modal version of the cupSelector
function closeModal() {

    document.body.style.overflowY = 'auto';
    cupSelectors[0].style.display = 'none';
    cupSelectorModalOpen = false;
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && cupSelectorModalOpen) {
        closeModal();
    }
};

//Main cup add/edit function
function addOrEditCup(isEdit, index, cup) {
    isEdit = modalEditMode;
    //Edit the cupArray
    cupArray[index] = cup;
    if (!isEdit) {
        if (mobileMode) addToMobileCart(cup);
        else addToBox(index, cup);
    } else {
        if (mobileMode) editMobileCart(index, cup);
        else editBox(index, cup);
    }
}

//Change mobile cart
function addToMobileCart(cup) {

}

function editMobileCart(index, cup) {

}

function fillMobileCart(index, cup) {

}

//Change regular box
function addToBox(index, cup) {
    coffeeBox[index] = cup;

    //Build the HTML and add the cupObject id to it
    let boxCup = document.getElementsByClassName('box-index')[index];
    let boxCupTop = boxCup.firstElementChild;
    let boxCupBottom = boxCup.lastElementChild;

    boxCup.classList.add('active');

    //Set top content
    boxCupTop.removeChild(boxCupTop.firstElementChild);

    let boxCupTopEdit = document.createElement('img');
    boxCupTopEdit.setAttribute('data-index', index);
    boxCupTopEdit.className = 'cup-item-detail-edit';
    boxCupTopEdit.src = location.protocol + '//' + location.host + '/imgs/coffee_box/edit.svg';

    boxCupTopEdit.addEventListener('click', () => {
        modalEditMode = true;
        openModal(null, boxCupTopEdit.getAttribute('data-index'));
    });

    boxCupTop.appendChild(boxCupTopEdit);

    let boxCupTopDetail = document.createElement('a');
    boxCupTopDetail.href = location.protocol + '//' + location.host + '/koffie/' + cup.id;
    boxCupTopDetail.className = 'cup-item-detail-link';
    boxCupTop.appendChild(boxCupTopDetail);
    let boxCupTopDetailImg = document.createElement('img');
    boxCupTopDetailImg.src = location.protocol + '//' + location.host + '/imgs/coffee_box/info.svg';
    boxCupTopDetail.appendChild(boxCupTopDetailImg);

    let boxCupTopBackground = document.createElement('img');
    boxCupTopBackground.className = 'cup-item-top-background';
    boxCupTopBackground.src = location.protocol + '//' + location.host + '/imgs/coffee_box/cups/' + cup.image_name;
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
    boxCupBottomName.innerText = cup.name;
    boxCupBottom.appendChild(boxCupBottomName);

    let boxCupBottomDescription = document.createElement('p');
    boxCupBottomDescription.classList.add('cup-item-bottom-description');
    boxCupBottomDescription.innerText = cup.description;
    boxCupBottom.appendChild(boxCupBottomDescription);

    boxCup.classList.remove('cup-item-empty');

    //Close modal
    if (cupSelectorModalOpen) closeModal();
}

function editBox(index, cup) {
    let topLink = document.getElementsByClassName('cup-item-detail-link')[index];
    topLink.href = location.protocol + '//' + location.host + '/koffie/' + cup.id;

    let backgroundImage = document.getElementsByClassName('cup-item-top-background')[index];
    backgroundImage.src = location.protocol + '//' + location.host + '/imgs/coffee_box/cups/' + cup.image_name;

    let botName = document.getElementsByClassName('cup-item-bottom-name')[index];
    botName.innerText = cup.name;

    let botDescription = document.getElementsByClassName('cup-item-bottom-description')[index];
    botDescription.innerText = cup.description;

    modalEditMode = false;

    //Close modal
    if (cupSelectorModalOpen) closeModal();
}



function fillBox(index, cup) {
    addToBox(index, cup);
}
