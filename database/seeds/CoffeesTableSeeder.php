<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CoffeesTableSeeder extends Seeder
{
    private const coffeeNames = array(
        'Envivio',
        'Patata',
        'Fuoco',
        'Zenzero',
        'Melaza',
        'Cetriolo',
        'Sutropa',
        'Tertrana',
        'Siomaso',
        'Condatio',
        'Porisimo',
        'Raterina',
    );

    private const descriptions = array(
        'Strong and energetic',
        'Mild and milky',
        'Rich in taste',
        'A hit of flavour'
    );

    private const imageNames = array(
        'brown.png',
        'green.png',
        'orange.png',
        'purple.png',
        'red.png'
    );

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++)
            DB::table('coffees')->insert([
                'name' => self::coffeeNames[array_rand(self::coffeeNames)] . ' Lungo',
                'description' => self::descriptions[array_rand(self::descriptions)],
                'image_name' => 'colors/' . self::imageNames[array_rand(self::imageNames)],
            ]);
    }
}
