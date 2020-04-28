<?php

namespace App\Http\Controllers;

use App\Coffee;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;

class CoffeeBoxController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index()
    {
        $coffee = Coffee::all();
        return view('coffee_box')->with('coffees',$coffee);
    }

    public function coffeeAjax() {

    }
}
