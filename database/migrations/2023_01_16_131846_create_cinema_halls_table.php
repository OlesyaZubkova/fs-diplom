<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCinemaHallsTable extends Migration
{
    public function up()
    {
        Schema::create('cinema_halls', function (Blueprint $table) {
            $table->id();
            $table->string('hall_title');
            $table->integer('row');
            $table->integer('chair');
            $table->integer('price_standard');
            $table->integer('price_vip');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cinema_halls');
    }
};
