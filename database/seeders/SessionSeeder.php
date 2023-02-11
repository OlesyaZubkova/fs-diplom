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

        $seancesTime = array('10:20', '14:10', '18:40', '22:00');
        $arrLength = count($seancesTime);
        for ($t = 1; $t < $arrLength; $t++) {
            DB::table('sessions')->insert([
                'time' => $seancesTime[$t],
                'cinema_hall_id' => 1,
                'film_id' => 2,
            ]);

            DB::table('sessions')->insert([
                'time' => $seancesTime[$t],
                'cinema_hall_id' => 1,
                'film_id' => 1,
            ]);

            DB::table('sessions')->insert([
                'time' => $seancesTime[$t],
                'cinema_hall_id' => 1,
                'film_id' => 3,
            ]);
        }

        $seancesTime2 = array('11:15', '14:40', '16:00', '18:30', '21:00', '23:30');
        $arrLength2 = count($seancesTime2);

        for ($t2 = 1; $t2 < $arrLength2; $t2++) {
            DB::table('sessions')->insert([
                'time' => $seancesTime2[$t2],
                'cinema_hall_id' => 2,
                'film_id' => 2,
            ]);

            DB::table('sessions')->insert([
                'time' => $seancesTime2[$t2],
                'cinema_hall_id' => 2,
                'film_id' => 1,
            ]);

            DB::table('sessions')->insert([
                'time' => $seancesTime2[$t2],
                'cinema_hall_id' => 2,
                'film_id' => 3,
            ]);
        }
    }
}
