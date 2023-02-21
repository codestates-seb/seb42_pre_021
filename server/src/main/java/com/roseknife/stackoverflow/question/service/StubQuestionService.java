package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.question.entity.Question;

import javax.annotation.PostConstruct;

public class StubQuestionService {
    private Question question1;

    @PostConstruct
    public void init() {
        question1 = new Question();
        question1.setQuestionId(1L);
        question1.setTitle("test_quest_title");
        question1.setContent("test_quest_Content");
        question1.setMember(new Member());
    }
}
