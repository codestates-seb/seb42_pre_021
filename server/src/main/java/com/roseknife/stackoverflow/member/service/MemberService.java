package com.roseknife.stackoverflow.member.service;

import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.member.repository.MemberRepository;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public Member createMember(Member member) {
        verifyExistsMember(member);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    @Transactional(readOnly = true)
    public Member findMember(Long memberId) {
        return findVerifiedMemberById(memberId);
    }
    @Transactional(readOnly = true)
    public Member findMember(String email) {
        return findVerifiedMemberByEmail(email);
    }

    @Transactional(readOnly = true)
    public Page<Member> findMembers(int page, int size, String sortBy, String sortDir) {
        return memberRepository.findAll(PageRequest.of(page, size,
            Sort.Direction.valueOf(sortDir), sortBy));
    }

    public Member updateMember(Member member) {
        Member findMember = findVerifiedMemberById(member.getMemberId());
        Member updatedMember = beanUtils.copyNonNullProperties(member, findMember);

        return updatedMember;
    }

    public void deleteMember(long memberId) {
        Member member = findVerifiedMemberById(memberId);
        memberRepository.delete(member);
    }

    private Member findVerifiedMemberByEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        Member findMember = optionalMember
            .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private Member findVerifiedMemberById(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member findMember = optionalMember
            .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifyExistsMember(Member member) {
        verifyExistsEmail(member.getEmail());
        verifyExistsNickname(member.getNickname());
    }

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.EMAIL_EXISTS);
        }
    }

    private void verifyExistsNickname(String nickname) {
        Optional<Member> member = memberRepository.findByNickname(nickname);
        if (member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.NICKNAME_EXIST);
        }
    }
}
