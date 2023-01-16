<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $fillable = [
        'id', 'title', 'description', 'duration', 'country', 'poster',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];
}
