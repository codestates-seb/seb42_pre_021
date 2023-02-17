package com.roseknife.stackoverflow.question.entity;

import com.roseknife.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    private String title;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
