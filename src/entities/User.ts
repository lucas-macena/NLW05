import { Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm"

import {v4 as uuid} from "uuid"

@Entity("users")
class User {
    @PrimaryColumn()
    id: string

    @Column() //por possuir o mesmo nome da variavel do SQL, posso deixar vazio, se eu quiser colocar nomes diferentes basta colocar como parametro
    email: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {User}