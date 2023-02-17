package com.roseknife.stackoverflow.member.mapper;

import com.roseknife.stackoverflow.member.dto.MemberDto;
import com.roseknife.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post requestBody);
}
