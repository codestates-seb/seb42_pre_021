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

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionTags().contains(this)) {
            this.question.getQuestionTags().add(this);
        }
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!this.tag.getQuestionTags().contains(this)) {
            this.tag.getQuestionTags().add(this);
        }
    }
}
