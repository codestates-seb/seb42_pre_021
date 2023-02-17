package com.roseknife.stackoverflow.member.controller;

import com.roseknife.stackoverflow.member.dto.MemberDto;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.member.mapper.MemberMapper;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@Validated
@RequestMapping("/members")
@Slf4j
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    @PostMapping()
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        memberService.createMember(member);

        log.info("create member");
        URI location = UriComponentsBuilder
            .newInstance()
            .path("/members/{member-id}")
            .buildAndExpand(member.getMemberId()).toUri();

        return ResponseEntity.created(location).build();
    }
}
