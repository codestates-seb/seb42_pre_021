package com.roseknife.stackoverflow.bookmark.service;

import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.repository.AnswerBookmarkRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
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

	public AnswerBookmark createAnswerBookmark(AnswerBookmark answerBookmark) {
		verifyExistAnswerBookmark(answerBookmark);
		answerBookmark.setAnswerBookmarkFlag(true);
		return answerBookmarkRepository.save(answerBookmark);
	}

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

	private void verifyExistAnswerBookmark(AnswerBookmark answerBookmark) {
		Optional<AnswerBookmark> optionalAnswerBookmark
				= answerBookmarkRepository.findByAnswerAnswerIdAndMemberMemberId(answerBookmark.getAnswer().getAnswerId(), answerBookmark.getMember().getMemberId());
		if (optionalAnswerBookmark.isPresent()) {
			throw new BusinessLogicException(ExceptionCode.QUESTION_BOOKMARK_EXISTS);
		}
	}

	private AnswerBookmark findVerifiedAnswerBookmark(Long answerBookmarkId) {
		Optional<AnswerBookmark> optionalAnswerBookmark = answerBookmarkRepository.findById(answerBookmarkId);

		AnswerBookmark answerBookmark
			= optionalAnswerBookmark.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_BOOKMARK_NOT_FOUND));
		return answerBookmark;
	}
}
