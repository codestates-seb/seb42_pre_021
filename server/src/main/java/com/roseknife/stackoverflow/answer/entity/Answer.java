package com.roseknife.stackoverflow.answer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer extends Auditable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerId;

	@Column(nullable = false)
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	// modified 36-44
	@OneToOne(mappedBy = "member", cascade = CascadeType.ALL)
	private AnswerBookmark answerBookmark;

	public void setAnswerBookmark(AnswerBookmark answerBookmark) {
		this.answerBookmark = answerBookmark;
		if (answerBookmark.getAnswer() != this) {
			answerBookmark.setAnswer(this);
		}
	}
}
