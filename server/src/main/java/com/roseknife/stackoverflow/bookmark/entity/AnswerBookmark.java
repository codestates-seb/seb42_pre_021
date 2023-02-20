package com.roseknife.stackoverflow.bookmark.entity;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerBookmark {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerBookmarkId;

	private boolean answerBookmarkFlag = false;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	@OneToOne
	@JoinColumn(name = "ANSWER_ID")
	private Answer answer;
}
