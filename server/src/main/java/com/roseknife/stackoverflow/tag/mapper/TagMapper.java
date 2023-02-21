package com.roseknife.stackoverflow.tag.mapper;

import com.roseknife.stackoverflow.tag.dto.TagDto;
import com.roseknife.stackoverflow.tag.entity.Tag;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    Tag tagPostToTag(TagDto.Post requestBody);
    TagDto.Response tagToTagResponse(Tag tag);

    List<TagDto.Response> tagsToTagResponses(List<Tag> tags);
}
