package com.roseknife.stackoverflow.tag.init;

import com.roseknife.stackoverflow.tag.entity.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class InitDb {
    private final InitService initService;

    @PostConstruct
    public void init() {
        initService.dbInit1();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {
        private final EntityManager em;
        public void dbInit1() {
            Tag tag1 = createTag("JAVA", "java_content");
            em.persist(tag1);

            Tag tag2 = createTag("SPRING", "spring_content");
            em.persist(tag2);

            Tag tag3 = createTag("SPRING SECURITY", "security_content");
            em.persist(tag3);

            Tag tag4 = createTag("SPRING BOOT", "spring_boot_content");
            em.persist(tag4);

            Tag tag5 = createTag("js", "js");
            em.persist(tag5);

            Tag tag6 = createTag("react", "react");
            em.persist(tag6);
        }

        private Tag createTag(String name, String content) {
            Tag tag = new Tag();
            tag.setName(name);
            tag.setContent(content);
            return tag;
        }
    }
}
