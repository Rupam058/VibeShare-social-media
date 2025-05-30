<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController {
    public function __construct(protected UserService $userService) {
    }
    private const PROVIDER_NAME = 'google';

    // For redirecting to google authentication
    public function redirect() {
        return Socialite::driver($this::PROVIDER_NAME)->redirect();
    }

    // info we get from the authentication by google
    public function callback() {
        $user = Socialite::driver($this::PROVIDER_NAME)->user();
        $email = $user->getEmail();
        $avatar = $user->getAvatar();

        if (!$this->userService->onThirdPartyCallback(
            $this::PROVIDER_NAME,
            $email,
            $avatar
        )) {
            // Create a redirect response with JSON data
            return redirect("http://localhost:8000")
                ->with('message', json_encode([
                    'status' => 'error',
                    'message' => 'Account already exists with a different authentication method'
                ]));
        }
        return redirect("http://localhost:8000");
    }
}
