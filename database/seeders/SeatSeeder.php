<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('seats')->insert([
            'number' => 3,
            'status' => 'standard',
            'cinema_hall_id' => 1,
        ]);

        DB::table('seats')->insert([
            'number' => 3,
            'status' => 'standard',
            'cinema_hall_id' => 3,
        ]);
    }
}
