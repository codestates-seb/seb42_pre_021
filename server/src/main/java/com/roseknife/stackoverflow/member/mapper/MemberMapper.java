package com.roseknife.stackoverflow.member.mapper;

import com.roseknife.stackoverflow.member.dto.MemberDto;
import com.roseknife.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post requestBody);

    @Mapping(source = "introduce.company", target = "company")
    @Mapping(source = "introduce.title", target = "title")
    @Mapping(source = "introduce.content", target = "content")
    MemberDto.Response membertoMemberResponse(Member member);
}
