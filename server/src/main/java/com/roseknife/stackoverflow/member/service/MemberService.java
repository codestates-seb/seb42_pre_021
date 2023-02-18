package com.roseknife.stackoverflow.member.service;

import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    @Transactional
    public Member createMember(Member member) {
        verifyExistsMember(member);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    public Member findMember(Long memberId) {
        return findVerifiedMember(memberId);
    }

    private Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember
            .orElseThrow(() -> new RuntimeException("Member is not exist."));
        return findMember;
    }

    private void verifyExistsMember(Member member) {
        verifyExistsEmail(member.getEmail());
        verifyExistsNickname(member.getNickname());
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            throw new RuntimeException("Email is already exist.");
        }
    }

    private void verifyExistsNickname(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        if (member.isPresent()) {
            throw new RuntimeException("Nickname is already exist.");
        }
    }
}
