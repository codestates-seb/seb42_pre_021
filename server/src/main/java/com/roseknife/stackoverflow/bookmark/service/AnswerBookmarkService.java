package com.roseknife.stackoverflow.bookmark.service;

import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.repository.AnswerBookmarkRepository;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerBookmarkService {
	private final AnswerBookmarkRepository answerBookmarkRepository;
	private final MemberService memberService;


	public AnswerBookmark updateAnswerBookmark(AnswerBookmark answerBookmark) {
		AnswerBookmark findAnswerBookmark = findVerifiedAnswerBookmark(answerBookmark.getAnswerBookmarkId());

		if (Objects.isNull(findAnswerBookmark.getMember())) {
			findAnswerBookmark.setMember(memberService.findMember(answerBookmark.getMember().getMemberId()));
		}
		if (isValidMember(answerBookmark, findAnswerBookmark)) {
			findAnswerBookmark.setAnswerBookmarkFlag(!findAnswerBookmark.isAnswerBookmarkFlag());
		}
		return findAnswerBookmark;
	}

	private static boolean isValidMember(AnswerBookmark answerBookmark, AnswerBookmark findAnswerBookmark) {
		return Objects.equals(findAnswerBookmark.getMember().getMemberId(), answerBookmark.getMember().getMemberId());
	}

	private AnswerBookmark findVerifiedAnswerBookmark(Long answerBookmarkId) {
		Optional<AnswerBookmark> optionalAnswerBookmark = answerBookmarkRepository.findById(answerBookmarkId);

		AnswerBookmark answerBookmark = optionalAnswerBookmark.orElseThrow();
		return answerBookmark;
	}
}
