import { Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Section } from "./Section";


@Entity("Post")
export class Post {

    @Column("int", {
        nullable: false,
        primary: true,
        name: "Id"
    })
    Id: number;

    @OneToOne((type) => Section, (section) => section.post)
    @JoinColumn([
            {name: "work", referencedColumnName: "work"},
            {name: "section", referencedColumnName: "section"}
    ])
    sectionEntity: Section;

}
