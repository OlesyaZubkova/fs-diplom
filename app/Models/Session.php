<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'time',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];
}
