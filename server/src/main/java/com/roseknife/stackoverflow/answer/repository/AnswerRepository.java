package com.roseknife.stackoverflow.answer.repository;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {

//    Page<Answer> findByQuestionId(Long QuestionId, Pageable pageable);
    Page<Answer> findByQuestionQuestionId(Long QuestionId, Pageable pageable);
}
