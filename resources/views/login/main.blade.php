    @extends('layouts.app')

@section('title','Koffie box')
@section('css', asset('css/login/main.css'))

@section('content')
    <div class="login-section">

          <div class="row coffee-box-title">

            </div>

            <div class="loginContainer app-background">

                <div class="row">
                   <div class="col-12 top-row">
                       <h2 class="item">Don't have an account?</h2>
                       <a href="#" class="btn-register item normal-shadow">Register</a>
                   </div>
                </div>

                <div class="bottom-row row">
                    <div class="left col-7">
                        <img src="imgs/logo_white.png" alt="">
                    </div>
                    <div class="right col-5">
                        <h3>Please login to continue</h3>
                        <p style="color: #fff;">Don't have an account? click <a style="color: gray" href="">here</a>.</p>
                        <form action="">

                            <label for="username">
                                E-mail
                                <input name="E-mail" type="email">
                            </label>

                            <label for="username">
                                Password
                                <input name="Password" type="password">
                            </label>

                            <a href="" class="btn normal-shadow">
                                Login
                            </a>


                        </form>
                    </div>
                </div>

            </div>
    </div>
@endsection


