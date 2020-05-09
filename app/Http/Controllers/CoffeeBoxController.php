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
     *
     *
     * @return Renderable
     */
    public function index()
    {
        return view('coffee_box');
    }

    /**
     *
     *
     * @return Renderable
     */
    public function final()
    {
        return view('coffee_box_final');
    }
}
