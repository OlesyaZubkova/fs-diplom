<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasMany;

class CinemaHall extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'hall_title', 'row', 'chair', 'price_standard', 'price_vip', 'free',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function sessions(): hasMany
    {
        return $this->hasMany(Session::class, 'cinema_id', 'id');
    }

    public function chairs(): hasMany
    {
        return $this->hasMany(Seat::class, 'cinema_id', 'id');
    }
}
