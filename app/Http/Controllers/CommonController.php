<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class CommonController extends Controller
{


    public function index()
    {

        $cinemaHalls = CinemaHall::with('sessions')->where('free', 1)->select('id', 'hall_title')->get();


        // Все фильмы в открытых залах
        $filmId = Session::whereHas('cinemaHall', function (Builder $query) {
            $query->where('free', 1);
        })->pluck('film_id');
        $films = Film::all()->whereIn('id', $filmId);

        return ["cinemaHalls" => $cinemaHalls, "films" => $films];



//testing
//        $films = DB::table('films')->pluck('title')->all();
//        var_dump($films);

//        $films = DB::table('films')->select('title', 'duration')->get();
//        var_dump($films);
//        echo $films;

//        $films = DB::table('films')->where('title', '=', 'film 1')->get();
//        echo $films;

        /*
        $films = DB::table('films')
            ->where('title', '=', 'Alice in Wonderland')
            ->orWhere('country', '=', 'Russia')
            ->get();
        echo $films;

        */

        /*

        $film = DB::table('films')->where('title', 'film 2')->first();

        var_dump($film->title);

        */


        /*
        $films = DB::table('films')->orderBy('title')->chunk(1, function ($films) {
            foreach ($films as $film) {
                var_dump($film->title);
            }
        });
        */

//        $cinemahalls = DB::table('cinema_halls')->get();
//
//        foreach ($cinemahalls as $cinemahall)
//        {
//            var_dump($cinemahall->chair) . PHP_EOL;
//        }
    }





}

