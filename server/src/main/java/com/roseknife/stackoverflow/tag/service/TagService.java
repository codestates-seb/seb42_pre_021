package com.roseknife.stackoverflow.tag.service;

import com.roseknife.stackoverflow.tag.entity.QuestionTag;
import com.roseknife.stackoverflow.tag.entity.Tag;
import com.roseknife.stackoverflow.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    public Page<Tag> findTags(int page, int size) {
        Page<Tag> tags = tagRepository.findAll(PageRequest.of(page, size,
            Sort.by("name")));
        return tags;
    }

    public List<Tag> findTag(String name) {
        return tagRepository.findAllByNameLike("%"+name.toUpperCase()+"%");
    }

//    @Transactional
    public List<Tag> findTagNames(List<String> tagNames) {
        List<Tag> tags = new ArrayList<>();
        for (String tagName : tagNames) {
            Tag findTag = tagRepository.findByName(tagName.toUpperCase()).orElse(new Tag(tagName.toUpperCase(), null));
            tagRepository.save(findTag);
            tags.add(findTag);
        }
        return tags;
    }
}
