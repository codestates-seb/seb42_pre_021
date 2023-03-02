package com.roseknife.stackoverflow.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
public class LoginController {
    @GetMapping("/member/login")
    public ResponseEntity login(HttpServletRequest request, HttpServletResponse response,
                                @RequestParam("access_token")String accessToken,
                                @RequestParam("refresh_token")String refreshToken) {
        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);
        return ResponseEntity.ok().build();
    }
}
