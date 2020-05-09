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
        <img class="cup-selector-inner-paginate-left" src="{{ asset('imgs/coffee_box/modal_left.svg') }}" alt="Show previous cups" onclick="paginateSelector(cupSelectorPage-1,cupsPerPage)">
        <div class="cup-selector-inner-paginate-pages">

        </div>
        <img class="cup-selector-inner-paginate-right" src="{{ asset('imgs/coffee_box/modal_right.svg') }}" alt="Show next cups" onclick="paginateSelector(cupSelectorPage+1,cupsPerPage)">
    </div>
</div>
