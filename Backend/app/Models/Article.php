<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'articles';

    /**
     * The attributes which are mass assigned will be used.
     *
     * It will return @var array
     */
    protected $fillable = [
        'title',
        'body',
        'author',
    ];



}
