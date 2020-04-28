@include('additions/header')

<div class="wrap">
    @include('additions/topmenu')
    <div id="app">
        <div class="mobile-menu">
            <div class="mobile-menu-navigation col-12">
                <a href="{{ route('home_index') }}" class="{{ request()->routeIs('home_index') ? 'active' : '' }}">
                    <h2>Home</h2>
                    <span></span>
                </a>
                <a href="{{ route('coffeebox_index') }}"
                   class="{{ request()->routeIs('coffeebox_index') ? 'active' : '' }}">
                    <h2>Koffie box</h2>
                    <span></span>
                </a>
                <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                    <h2>Koffie</h2>
                    <span></span>
                </a>
                <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                    <h2>Info</h2>
                    <span></span>
                </a>
                <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                    <h2>Contact</h2>
                    <span></span>
                </a>
                <a href="{{ route('home_index') }}" class="shopping-bag">
                    <h2>Shopping bag <img src="{{ asset('imgs/shopping-bag.svg') }}" alt="Shopping cart"></h2>
                    <span></span>
                </a>
                <button class="btn-standard">
                    Login
                </button>
            </div>
        </div>
        @yield('content')
    </div>
</div>
@include('additions/footer')
