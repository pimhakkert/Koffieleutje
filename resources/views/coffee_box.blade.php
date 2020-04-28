@extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/coffee_box/index.css'))
@section('js', asset('js/coffee_box/index.js '))

@section('content')
    <div class="coffee-box">
        <div class="row coffee-box-title">
            <h1 class="col-7">Customize your box</h1>
            <div class="col-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque ducimus eaque expedita
                    illum.</p>
            </div>
        </div>
        <div class="coffee-box-step1 app-background">
            <h2>Step 1.</h2>
            <h3>Choose your package size.</h3>
            <div class="coffee-box-step1-buttons">
                <div class="coffee-box-step1-buttons-button" data-packagesize="12" onclick="setPackageSize(this)">
                    <p>12 capsules - <span>€ 4,99</span></p>
                </div>
                <div class="coffee-box-step1-buttons-button" data-packagesize="24" onclick="setPackageSize(this)">
                    <p>24 capsules - <span>€ 9,49</span></p>
                </div>
                <div class="coffee-box-step1-buttons-button popular-choice" data-packagesize="36" onclick="setPackageSize(this)">
                    <p>36 capsules - <span>€ 13,99</span></p>
                </div>
                <div class="coffee-box-step1-buttons-button" data-packagesize="48" onclick="setPackageSize(this)">
                    <p>48 capsules - <span>€ 16,99</span></p>
                </div>
                <div class="coffee-box-step1-buttons-button" data-packagesize="60" onclick="setPackageSize(this)">
                    <p>60 capsules - <span>€ 19,99</span></p>
                </div>
            </div>
        </div>
        <div class="coffee-box-step2 app-background">
            <h2>Step 2.</h2>
            <h3>Pick your favorites from our selection.</h3>
            <div class="coffee-box-step2-selection">
                <div class="cup-item-holder coffee-box-step2-selection-box col-md-8">
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
                <div class="coffee-box-step2-selection-text col-md-4">
                    <p><em>ipsum dolor sit amet, consectetur adipisicing elit. In inventore itaque nulla odit ullam
                            voluptatem! Accusantium ad aliquid animi aspernatur dolore reiciendis voluptas voluptatem
                            voluptatum?</em></p>
                    <button class="btn-standard-2">Continue</button>
                </div>
            </div>
            <div class="coffee-box-step2-modal" style="display: none;">
                <div class="coffee-box-step2-modal-inner">
                    <img class="coffee-box-step2-modal-inner-close" src="{{ asset('imgs/coffee_box/modal_close.svg') }}" alt="Close modal screen" onclick="closeModal()">
                    <div class="coffee-box-step2-modal-inner-text">
                        <h2>Our selection</h2>
                        <p>Pick your favorites from our selection.</p>
                    </div>
                    <div class="coffee-box-step2-modal-inner-capsules">

                    </div>
                    <div class="coffee-box-step2-modal-inner-paginate">
                        <img class="coffee-box-step2-modal-inner-paginate-left" src="{{ asset('imgs/coffee_box/modal_left.svg') }}" alt="Show previous cups" onclick="paginateModal(modalPage-1,cupsPerPage)">
                        <div class="coffee-box-step2-modal-inner-paginate-pages">

                        </div>
                        <img class="coffee-box-step2-modal-inner-paginate-right" src="{{ asset('imgs/coffee_box/modal_right.svg') }}" alt="Show next cups" onclick="paginateModal(modalPage+1,cupsPerPage)">
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
