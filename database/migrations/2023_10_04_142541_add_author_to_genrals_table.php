<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAuthorToGenralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('genrals', function (Blueprint $table) {
            $table->string('content')->nullable();
            $table->string('writer')->nullable();
            $table->enum('verify_status', array('0','1'))->default('0');
            $table->string('verify_message')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('genrals', function (Blueprint $table) {
            //
        });
    }
}
