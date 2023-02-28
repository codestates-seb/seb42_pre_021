package com.roseknife.stackoverflow.tag.repository;

import com.roseknife.stackoverflow.tag.entity.QuestionTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long>  {
    void deleteByQuestionQuestionId(Long questionId);
}
