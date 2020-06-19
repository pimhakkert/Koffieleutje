<?php

namespace App\Http\Controllers;

use App\Coffee;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;

class CoffeeController extends Controller
{
    /**
     *
     *
     * @return Renderable
     */
    public function detail()
    {
        return view('coffee_detail');
    }
}
