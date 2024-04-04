import { Column, Entity, OneToMany } from 'typeorm';
import { CvEntity } from "../../cv/entities/cv.entity";
import { TimestampEntity } from 'src/generics/timestamp.entity/timestamp.entity';
import {UserRoleEnum} from "../../enums/user-role.enum";

@Entity('user')
export class UserEntity extends TimestampEntity {

  @Column({
    length: 50,
    unique: true,
  })
  username: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({
    default: UserRoleEnum.USER
  })
  role: string;

  @OneToMany(
    (type) => CvEntity,
    (cv) => cv.user,
    {
      cascade: true,
      nullable: true,
    }
  )
  cvs: CvEntity[];
}
