package com.roseknife.stackoverflow.bookmark.service;

import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.bookmark.repository.QuestionBookmarkRepository;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionBookmarkService {
	private final QuestionBookmarkRepository questionBookmarkRepository;
	private final MemberService memberService;

	public QuestionBookmark updateQuestionBookmark(QuestionBookmark questionBookmark) {
		QuestionBookmark findQuestionBookmark = findVerifiedQuestionBookmark(questionBookmark.getQuestionBookmarkId());

		if (Objects.isNull(findQuestionBookmark.getMember())) {
			findQuestionBookmark.setMember(memberService.findMember(questionBookmark.getMember().getMemberId()));
		}
		if (isValidMember(questionBookmark, findQuestionBookmark)) {
			findQuestionBookmark.setQuestionBookmarkFlag(!findQuestionBookmark.isQuestionBookmarkFlag());
		}
		return findQuestionBookmark;
	}

	private static boolean isValidMember(QuestionBookmark questionBookmark, QuestionBookmark findQuestionBookmark) {
		return Objects.equals(findQuestionBookmark.getMember().getMemberId(), questionBookmark.getMember().getMemberId());
	}

	private QuestionBookmark findVerifiedQuestionBookmark(Long questionBookmarkId) {
		Optional<QuestionBookmark> optionalQuestionBookmark = questionBookmarkRepository.findById(questionBookmarkId);

		QuestionBookmark questionBookmark = optionalQuestionBookmark.orElseThrow();
		return questionBookmark;
	}
}
