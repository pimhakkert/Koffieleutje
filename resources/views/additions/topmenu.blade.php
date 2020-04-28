<nav class="topmenu">
    <div class="row">
        <div class="topmenu-logo col-3">
            <img src="{{ asset('imgs/logo_white.png') }}" alt="Koffieleutje logo">
        </div>
        <div class="topmenu-navigation col-9">
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
            <a href="{{ route('home_index') }}">
                <h2><img src="{{ asset('imgs/shopping-bag.svg') }}" alt="Shopping cart"></h2>
                <span></span>
            </a>
        </div>
        <div class="topmenu-mobile col-3">
            <button class="hamburger hamburger--slider" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div class="row btn-row">
        <button class="btn-standard">
            Login
        </button>
    </div>
    <div class="topmenu-block"></div>
</nav>
