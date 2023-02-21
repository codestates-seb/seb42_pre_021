package com.roseknife.stackoverflow.tag.entity;

import com.roseknife.stackoverflow.question.entity.Question;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionTagId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
