package com.roseknife.stackoverflow.tag.controller;

import com.roseknife.stackoverflow.dto.MultiResponseDto;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.tag.dto.TagDto;
import com.roseknife.stackoverflow.tag.entity.Tag;
import com.roseknife.stackoverflow.tag.mapper.TagMapper;
import com.roseknife.stackoverflow.tag.service.TagService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper mapper;

    @PostMapping
    public ResponseEntity postTag(@RequestBody TagDto.Post requestBody) {
        Tag tag = mapper.tagPostToTag(requestBody);
        tagService.createTag(tag);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity getTags(@RequestParam("page") int page, @RequestParam("size") int size) {
        Page<Tag> tagPage = tagService.findTags(page - 1, size);
        List<Tag> tags = tagPage.getContent();

        return ResponseEntity.ok(
            new MultiResponseDto<>(mapper.tagsToTagResponses(tags), tagPage)
        );
    }

    @GetMapping("/search")
    public ResponseEntity getTag(@RequestParam("name") String name) {
        List<Tag> tags = tagService.findTag(name);
        return ResponseEntity.ok(
            new SingleResponseDto<>(mapper.tagsToTagResponses(tags))
        );
    }
}
