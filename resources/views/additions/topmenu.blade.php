<nav class="topmenu">
    <div class="row">
        <div class="topmenu-logo col-3">
            <a href="/koffie-box"><img src="{{ asset('imgs/logo_white.png') }}" alt="Koffieleutje logo"></a>
        </div>
        <div class="topmenu-navigation col-9">
            <a href="{{ route('home_index') }}" class="{{ request()->routeIs('home_index') ? 'active' : '' }}">
                Home
                <span></span>
            </a>
            <a href="{{ route('coffeebox_index') }}"
               class="{{ request()->routeIs('coffeebox_index') ? 'active' : '' }}">
                Koffie box
                <span></span>
            </a>
            <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                Koffie
                <span></span>
            </a>
            <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                Info
                <span></span>
            </a>
            <a href="{{ route('home_index') }}" class="{{ request()->routeIs('') ? 'active' : '' }}">
                Contact
                <span></span>
            </a>
            <a href="{{ route('home_index') }}">
                <img src="{{ asset('imgs/shopping-bag.svg') }}" alt="Shopping cart">
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
