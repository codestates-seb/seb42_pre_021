package com.roseknife.stackoverflow.tag.repository;

import com.roseknife.stackoverflow.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {
    List<Tag> findAllByNameLike(String name);
}