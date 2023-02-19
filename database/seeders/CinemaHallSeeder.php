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
            'name' => 'Зал 1',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 250,
            'price_vip' => 600,
            'free' => true
        ]);

        DB::table('cinema_halls')->insert([
            'name' => 'Зал 2',
            'row' => 8,
            'chair' => 12,
            'price_standard' => 300,
            'price_vip' => 700,
            'free' => true
        ]);
    }
}
