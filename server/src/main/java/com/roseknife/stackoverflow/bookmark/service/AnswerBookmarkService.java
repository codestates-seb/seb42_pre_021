package com.roseknife.stackoverflow.bookmark.service;

import com.roseknife.stackoverflow.answer.service.AnswerService;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.repository.AnswerBookmarkRepository;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerBookmarkService {
	private final AnswerBookmarkRepository answerBookmarkRepository;
	private final MemberService memberService;
	private final AnswerService answerService;

	public AnswerBookmark createAnswerBookmark(AnswerBookmark answerBookmark) {
		memberService.findMember(answerBookmark.getMember().getMemberId());
		answerService.findAnswer(answerBookmark.getAnswer().getAnswerId());

		Optional<AnswerBookmark> optionalAnswerBookmark
				= Optional.ofNullable(verifyExistAnswerBookmark(answerBookmark));
		AnswerBookmark bookmark = optionalAnswerBookmark.orElse(answerBookmark);

		bookmark.setAnswerBookmarkFlag(!bookmark.isAnswerBookmarkFlag());
		return answerBookmarkRepository.save(bookmark);
	}

	private AnswerBookmark verifyExistAnswerBookmark(AnswerBookmark answerBookmark) {
		Optional<AnswerBookmark> optionalAnswerBookmark
				= answerBookmarkRepository.findByAnswerAnswerIdAndMemberMemberId(answerBookmark.getAnswer().getAnswerId(), answerBookmark.getMember().getMemberId());
		return optionalAnswerBookmark.orElse(null);
	}

	@Transactional(readOnly = true)
	public AnswerBookmark findByMemberIdAnswerBookmark(Long answerId, Long memberId) {
		Optional<AnswerBookmark> optionalAnswerBookmark = answerBookmarkRepository.findByAnswerAnswerIdAndMemberMemberId(answerId,memberId);
		AnswerBookmark findBookmark =
				optionalAnswerBookmark.orElse(new AnswerBookmark());

		return findBookmark;
	}
}
