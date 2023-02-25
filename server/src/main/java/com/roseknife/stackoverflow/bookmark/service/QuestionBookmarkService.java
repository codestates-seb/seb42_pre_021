package com.roseknife.stackoverflow.bookmark.service;

import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.bookmark.repository.QuestionBookmarkRepository;
import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionBookmarkService {
	private final QuestionBookmarkRepository questionBookmarkRepository;
	private final MemberService memberService;
	private final QuestionService questionService;

	public QuestionBookmark createQuestionBookmark(QuestionBookmark questionBookmark) {
		memberService.findMember(questionBookmark.getMember().getMemberId());
		questionService.findVerifiedQuestion(questionBookmark.getQuestion().getQuestionId(), FindStatus.NONE);

		Optional<QuestionBookmark> optionalQuestionBookmark
				= Optional.ofNullable(verifyExistQuestionBookmark(questionBookmark));
		QuestionBookmark bookmark = optionalQuestionBookmark.orElse(questionBookmark);

		bookmark.setQuestionBookmarkFlag(!bookmark.isQuestionBookmarkFlag());
		return questionBookmarkRepository.save(bookmark);
	}

	private QuestionBookmark verifyExistQuestionBookmark(QuestionBookmark questionBookmark) {
		Optional<QuestionBookmark> optionalQuestionBookmark =
				questionBookmarkRepository.findByQuestionQuestionIdAndMemberMemberId(questionBookmark.getQuestion().getQuestionId(), questionBookmark.getMember().getMemberId());
		return optionalQuestionBookmark.orElse(null);
	}

	@Transactional(readOnly = true)
	public QuestionBookmark findByMemberIdQuestionBookmark(Long questionId,Long memberId) {
		Optional<QuestionBookmark> optionalQuestionBookmark = questionBookmarkRepository.findByQuestionQuestionIdAndMemberMemberId(questionId,memberId);
		QuestionBookmark findBookmark =
				optionalQuestionBookmark.orElse(new QuestionBookmark());

		return findBookmark;
	}
}
