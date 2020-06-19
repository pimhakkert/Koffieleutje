    @extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/login/main.css'))

@section('content')
    <div class="login-section">

          <div class="row coffee-box-title">
              <h1 class="col-7" data-aos="fade-right"  data-aos-duration="1000">Customize your box</h1>
            </div>

            <div class="loginContainer app-background">

                <div class="row">
                   <div class="col-12 top-row">
                       <h2 class="item">Don't have an account?</h2>
                       <a href="#" class="btn-register item">Register</a>
                   </div>
                </div>

                <div class="bottom-row row">
                    <div class="left col-7">
                        <img src="imgs/logo_white.svg" alt="">
                    </div>
                    <div class="right col-5">
                        test
                    </div>
                </div>

            </div>
    </div>
@endsection


