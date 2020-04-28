<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoffeesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=0;$i<20;$i++)
        DB::table('coffees')->insert([
            'name' => 'Envivio Lungo',
            'description' => 'Strong and energetic',
            'image_name' => 'red.png',
        ]);
    }
}
