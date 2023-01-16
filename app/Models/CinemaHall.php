<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CinemaHall extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'hall_title', 'row', 'chair', 'price_standard', 'price_vip',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];
}
