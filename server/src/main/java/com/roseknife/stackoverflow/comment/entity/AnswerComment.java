package com.roseknife.stackoverflow.comment.entity;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerComment extends Auditable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerCommentId;

	@Column(nullable = false)
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ANSWER_ID")
	private Answer answer;
}

