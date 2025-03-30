<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Post extends Model {
    use HasFactory, HasUuids;

    protected $fillable = [
        "caption",
        "user_id",
        "image"
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany {
        return $this->hasMany(Comment::class);
    }

    public function like(): HasOne {
        return $this->hasOne(Like::class);
    }

    public function likes(): HasMany {
        return $this->hasMany(Like::class);
    }
}
