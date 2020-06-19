@extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/coffee_box/final.css'))
@section('js', asset('js/coffee_box/index.js '))

@section('content')
    <div class="wip">
        <div class="wip-inner">
            <h1>WIP</h1>
            <p>We are working hard to finish this website. Please stay tuned for updates.</p>
        </div>
    </div>
{{--    <div class="coffee-box">--}}
{{--        <div class="row coffee-box-title">--}}
{{--            <h1 class="col-7">Customize your box</h1>--}}
{{--            <div class="col-4">--}}
{{--                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cumque ducimus eaque expedita--}}
{{--                    illum.</p>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <div class="app-background">--}}
{{--            <h2>Step 3.</h2>--}}
{{--            <h3>Choose how often you would like to receive your chosen package.</h3>--}}
{{--            <div class="coffee-box-step1-buttons button-row btn-row-3 ">--}}
{{--                <div class="coffee-box-step1-buttons-button" onclick="setPackageSize(this)">--}}
{{--                    <p>Every week (7 days)</p>--}}
{{--                </div>--}}
{{--                <div class="coffee-box-step1-buttons-button" onclick="setPackageSize(this)">--}}
{{--                    <p>Twice a month (7 days)</p>--}}
{{--                </div>--}}
{{--                <div class="coffee-box-step1-buttons-button popular-choice" onclick="setPackageSize(this)">--}}
{{--                    <p>Every month (28 days)</p>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--        <div class="coffee-box-step2 app-background">--}}
{{--        </div>--}}
{{--    </div>--}}
@endsection
