package com.roseknife.stackoverflow.tag.repository;

import com.roseknife.stackoverflow.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    List<Tag> findAllByNameLike(String name);

    Optional<Tag> findByName(String name);
}