<?php

namespace Database\Seeders;

use App\Models\Film;
use App\Models\CinemaHall;
use App\Models\Seat;
use App\Models\Session;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            FilmSeeder::class,
            CinemaHallSeeder::class,
            SessionSeeder::class,
            TicketSeeder::class,
            AdminSeeder::class,
            SeatSeeder::class

        ]);

        /*

        CinemaHall::all()->count(5)->create()->each(
            function ($cinemaHall) {
                Seat::all()->count($cinemaHall['row'] * $cinemaHall['chair'])->sequence(
                    function ($sequence) {
                        return ['number' => $sequence->index + 1];
                    })
                    ->for($cinemaHall)->create();
            }
        );
        */
    }
}
