<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CinemaHallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cinema_halls')->insert([
            'hall_title' => 'Зал 4',
            'row' => 5,
            'chair' => 4,
            'price_standard' => 250,
            'price_vip' => 600,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'hall_title' => 'Зал 1',
            'row' => 7,
            'chair' => 9,
            'price_standard' => 300,
            'price_vip' => 700,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'hall_title' => 'Зал 3',
            'row' => 2,
            'chair' => 6,
            'price_standard' => 100,
            'price_vip' => 400,
            'free' => true
        ]);
    }
}
