<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sessions')->insert([
            'time' => '10:20',
            'cinema_hall_id' => 1,
            'film_id' => 2,
        ]);

        DB::table('sessions')->insert([
            'time' => '14:10',
            'cinema_hall_id' => 3,
            'film_id' => 1,
        ]);

        DB::table('sessions')->insert([
            'time' => '18:40',
            'cinema_hall_id' => 2,
            'film_id' => 3,
        ]);
    }
}
