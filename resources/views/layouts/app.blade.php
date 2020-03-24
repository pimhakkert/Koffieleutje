@include('additions/header')

<div class="wrap">
    @include('additions/topmenu')
    <div id="app">
        @yield('content')
    </div>
</div>
@include('additions/footer')
