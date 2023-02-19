<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use App\Models\Seat;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;

class CommonController extends Controller
{

    public function calendar()
    {
        // доступные для посещения кинозалы

        $cinemaHalls = CinemaHall::with('sessions')
            ->where('free', 1)
            ->select('id', 'name')
            ->get();

        // доступные к просмотру фильмы
        $filmId = Session::whereHas('cinemaHall', function (Builder $query) {
            $query->where('free', 1);
        })->pluck('film_id');

        $films = Film::all()->whereIn('id', $filmId);

        return ["films" => $films, "cinemaHalls" => $cinemaHalls];

    }

    // информация о сеансе

    public function seatSelect($sessionId)
    {
        $session = Session::where('sessions.id', $sessionId)
            ->join('cinema_halls', 'sessions.cinema_hall_id', '=', 'cinema_halls.id')
            ->join('films', 'sessions.film_id', '=', 'films.id')
            ->select(
                'sessions.id',
                'sessions.time',
                'films.title',
                'sessions.cinema_hall_id',
                'cinema_halls.name',
                'cinema_halls.row',
                'cinema_halls.price_standard',
                'cinema_halls.price_vip',
            )->first();

        $tickets = Seat::has('tickets')->whereHas('tickets', function(Builder $query) use ($sessionId) {
            $query->where('session_id', $sessionId);
        })->get();

        $seats = Seat::where('cinema_hall_id', $session->cinema_hall_id)->select('id', 'number', 'status')->get();

        foreach ($seats as $seat) {
            if ($tickets->contains($seat)) {
                $seat->status = 'sold';
            }
        }

        return ["session" => $session, "seats" => $seats];

    }

}

