@extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/detail/detail.css'))

@section('content')
    <div class="section">
        <div class="row detail">
            <div class="col-md-4 detail-left">
                <div class="detail-left-top">
                    <h1>Envivio Lungo</h1>
                    <h2>A rich and powerful blend</h2>
                </div>
                <div class="detail-left-bottom">
                    <img src="{{ asset('imgs/coffee_detail.png') }}" alt="Envivio Lungo coffee capsule">
                </div>
            </div>
            <div class="col-md-6 detail-right">
                <p>The Envivio Lungo coffee cup offers a rich taste, developed from carefully harvested coffee beans
                    from Colombia. The earthy taste of these beans are a big favorite for many customers and is a great
                    coffee to start with. Packaged in a strong aluminium capsule with a peel-back plastic cover, the
                    Enivivio Lungo coffee is guaranteed to deliver a great taste.</p>
                <div class="detail-right-flex">
                    <div>
                        <h4>Strength: <span>6/10</span></h4>
                        <h4>Weight: <span>100g</span></h4>
                    </div>
                    <a href="{{ route('home_index') }}">
                        <button class="normal-shadow btn-standard-2">Add to box</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
@endsection
