package com.roseknife.stackoverflow.member.service;

import com.roseknife.stackoverflow.auth.JwtTokenizer;
import com.roseknife.stackoverflow.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class LoginService {
    private final MemberService memberService;
    private final JwtTokenizer tokenizer;

    @Transactional(readOnly = true)
    public List<String> loginMember(Member member) {
        Member findMember = memberService.findMember(member.getEmail());
        List<String> tokens = new ArrayList<>();
        if (member.getPassword().equals(findMember.getPassword())) {
            tokens.add(delegateAccessToken(findMember));
            tokens.add(delegateRefreshToken(member));
        }
        return tokens;
    }

    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", member.getMemberId());
        claims.put("email", member.getEmail());

        String subject = member.getEmail();
        Date expiration = tokenizer.getTokenExpiration(tokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = tokenizer.encodeBase64SecretKey(tokenizer.getSecretKey());
        String accessToken = tokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(Member member) {
        String subject = member.getEmail();
        Date expiration = tokenizer.getTokenExpiration(tokenizer.getRefreshTokenExpirationMinutes());

        String base64EncodedSecretKey = tokenizer.encodeBase64SecretKey(tokenizer.getSecretKey());
        String refreshToken = tokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
