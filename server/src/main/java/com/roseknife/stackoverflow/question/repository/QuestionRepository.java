package com.roseknife.stackoverflow.question.repository;

import com.roseknife.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
//    @Query(value = "select * from question where (title || content) like %:keyword%",nativeQuery = true)
//    List<Question> searchQuestionsByKeyword(@Param("keyword") String keyword);

    Page<Question> findByTitleContainsOrContentContains(String titleKeyword,String contentKeyword,Pageable pageable);


}
