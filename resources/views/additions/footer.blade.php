<footer>
    <div class="wrap">
        <div class="row">
            <div class="col-12">
                <img src="{{ asset('imgs/logo_white.png') }}" alt="Koffieleutje logo" class="koffieleutje-logo">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <h3>Contact information</h3>
                <p>Coffeestreet 16-12 8821HS Amsterdam<br>
                    020 221 2323<br>
                    contact@thecoffeetray.com<br>
                KVK: 12345678</p>
            </div>
            <div class="col-lg-4 col-sm-12">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi facilis laudantium nulla officia quos
                    rerum, voluptatem? Ad facilis fugit inventore molestias quae ratione repellat suscipit unde.
                    Consectetur corporis id nemo.</p>
            </div>
            <div class="col-lg-4 col-sm-12 footer-links">
                <div>
                    <a href="{{ route('home_index') }}" class="col-4">
                        <h3>Home</h3>
                        <span></span>
                    </a>
                    <a href="{{ route('coffeebox_index') }}" class="col-4">
                        <h3>Koffie box</h3>
                        <span></span>
                    </a>
                    <a href="{{ route('home_index') }}" class="col-4">
                        <h3>Info</h3>
                        <span></span>
                    </a>
                </div>
                <div>
                    <a href="{{ route('home_index') }}" class="col-4">
                        <h3>Koffie</h3>
                        <span></span>
                    </a>
                    <a href="{{ route('home_index') }}" class="col-4">
                        <h3>Contact</h3>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>© Copyright Koffieleutje 2020 | <a href="">Cookies</a> | <a href="">Privacy agreement</a> | <a
                        href="">Sitemap</a></p>
            </div>
        </div>
    </div>
</footer>
<script src="{{ asset('js/main.js') }}"></script>
<script src="@yield('js')"></script>
</body>
</html>
