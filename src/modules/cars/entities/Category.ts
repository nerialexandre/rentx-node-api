import { v4 as uuidV4 } from 'uuid'
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('categories')
export class Category {
  @PrimaryColumn()
    id?:string

  @Column()
    name: string

  @Column()
    description: string

  @CreateDateColumn()
    createdAt: Date

  @UpdateDateColumn()
    updatedAt: Date

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
