package com.roseknife.stackoverflow.bookmark.entity;

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
public class QuestionBookmark {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long questionBookmarkId;

	private boolean questionBookmarkFlag = false;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "QUESTION_ID")
	private Question question;
	public void setQuestion(Question question) {
		this.question = question;
		if (question.getQuestionBookmark() != this) {
			question.setQuestionBookmark(this);
		}
	}
}
