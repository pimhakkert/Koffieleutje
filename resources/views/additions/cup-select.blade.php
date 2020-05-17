<link rel="stylesheet" href="{{ asset('css/additions/cup-selector.css') }}">
<div class="cup-selector-inner">
    <img class="cup-selector-inner-close" src="{{ asset('imgs/coffee_box/modal_close.svg') }}" alt="Close modal screen" onclick="closeModal()">
    <div class="cup-selector-inner-text">
        <h2>Our selection</h2>
        <p>Pick your favorites from our selection.</p>
    </div>
    <div class="cup-selector-inner-capsules">

    </div>
    <div class="cup-selector-inner-paginate">
        <img class="cup-selector-inner-paginate-left normal-shadow" src="{{ asset('imgs/coffee_box/modal_left.svg') }}" alt="Show previous cups" onclick="paginateSelector(cupSelectorPage-1,cupsPerPage)">
        <div class="cup-selector-inner-paginate-pages">
        </div>
        <img class="cup-selector-inner-paginate-right normal-shadow" src="{{ asset('imgs/coffee_box/modal_right.svg') }}" alt="Show next cups" onclick="paginateSelector(cupSelectorPage+1,cupsPerPage)">
    </div>
</div>
<div class="cup-selector-mobile-cart-button">
    <p class="cup-selector-mobile-cart-button-continue normal-shadow"><span>Continue </span></p>
    <div>
        <span  class="cup-selector-mobile-cart-button-content"></span>
        <img src="{{ asset('imgs/mobile-shopping-bag.svg') }}" alt="">
    </div>
</div>
<div class="cup-selector-mobile-cart">

</div>
