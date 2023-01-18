<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

class Session extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'time', 'cinema_hall_id', 'film_id'
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function cinema_hall(): BelongsTo
    {
        return $this->belongsTo(CinemaHall::class, 'cinema_hall_id');
    }

    public function film(): BelongsTo
    {
        return $this->belongsTo(Film::class, 'film_id');
    }
}
