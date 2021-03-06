    @extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/coffee_box/index.css'))
@section('js', asset('js/coffee_box/index.js '))

@section('content')
    <div class="coffee-box">
        <div class="row coffee-box-title">
            <h1 class="col-7" data-aos="fade-right"  data-aos-duration="1000">Customize your box</h1>
            <div class="col-4 normal-shadow" data-aos="fade-left" data-aos-duration="1000">
                <p>Customize your box to your liking. Choose the amount and taste you like and we'll make it happen.</p>
            </div>
        </div>
        <div class="coffee-box-step1 app-background">
            <div class='aos-wrapper' data-aos="fade-up" data-aos-duration="1000">
                <h2>Step 1.</h2>
                <h3>Choose your package size.</h3>
                <div class="coffee-box-step1-buttons">
                    <div class="coffee-box-step1-buttons-button normal-shadow" data-packagesize="12" onclick="setPackageSize(this)">
                        <p>12 capsules</p><span>€ 4,99</span>
                    </div>
                    <div class="coffee-box-step1-buttons-button normal-shadow" data-packagesize="24" onclick="setPackageSize(this)">
                        <p>24 capsules</p><span>€ 9,49</span>
                    </div>
                    <div class="coffee-box-step1-buttons-button popular-choice normal-shadow" data-packagesize="36" onclick="setPackageSize(this)">
                        <p>36 capsules</p><span>€ 13,99</span>
                    </div>
                    <div class="coffee-box-step1-buttons-button normal-shadow" data-packagesize="48" onclick="setPackageSize(this)">
                        <p>48 capsules</p><span>€ 16,99</span>
                    </div>
                    <div class="coffee-box-step1-buttons-button normal-shadow" data-packagesize="60" onclick="setPackageSize(this)">
                        <p>60 capsules</p><span>€ 19,99</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="coffee-box-step2 app-background">
            <div class='aos-wrapper  m-b-sm' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" >
                <h2>Step 2.</h2>
                <h3>Pick your favorites from our selection.</h3>
            </div>

            <div class="coffee-box-step2-selection" >
                <div class="cup-item-holder coffee-box-step2-selection-box col-md-8 normal-shadow" data-aos="fade-right" data-aos-duration="1000" >
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxindex="0" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxindex="1" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxIndex="2" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxIndex="3" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxIndex="4" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                    <div class="cup-item cup-item-empty box-index">
                        <div class="cup-item-top">
                            <img class="cup-item-top-add" data-boxIndex="5" src="{{ asset('imgs/coffee_box/add.svg') }}" alt="Add coffee capsule" onclick="openModal(this)">
                        </div>
                        <div class="cup-item-bottom">
                        </div>
                    </div>
                </div>
                    <div class="coffee-box-step2-selection-text col-md-4  normal-shadow aos-wrapper" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top">
                        <h2>Next step: Frequency</h2>
                        <p>Now that you have put together a box full of all your favorite tastes of coffee, it's time to
                            select the frequency of deliveries.</p>
                        <a href="{{ route('coffeebox_final') }}" class="btn-standard-2 normal-shadow">Continue</a>
                    </div>
            </div>
            <div class="cup-selector cup-selector-modal">
                @include('additions.cup-select')
                <script src="{{ asset('js/partials/cup-selector.js') }}"></script>
            </div>
        </div>
        @include('additions.cup-select-mobile-cart')
    </div>

@endsection
