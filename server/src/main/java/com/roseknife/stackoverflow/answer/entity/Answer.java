package com.roseknife.stackoverflow.answer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer extends Auditable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerId;

	@Column(length = 1000000)
	private String html;

	@Column(length = 1000000)
	private String markdown;

	private Integer voteCount=0;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	@ManyToOne
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	@JsonIgnore
	@OneToMany(mappedBy = "answer",cascade = CascadeType.REMOVE)
	private List<AnswerComment> answerComments = new ArrayList<>();

	@JsonIgnore
	@OneToOne(mappedBy = "answer",cascade = CascadeType.REMOVE)
	private AnswerBookmark answerBookmark;

	public void setAnswerBookmark(AnswerBookmark answerBookmark) {
		this.answerBookmark = answerBookmark;
		if (answerBookmark.getAnswer() != this) {
			answerBookmark.setAnswer(this);
		}
	}
}
