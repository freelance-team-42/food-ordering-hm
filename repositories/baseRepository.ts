import { getConnection, getRepository } from "typeorm";

export class BaseRepository {
    model:any
    constructor(model:any){
        this.model = model
    }

    async findOne(filter:any){
        const respository = await getRepository(this.model);
        const result: any = await respository.findOne(filter);
        return result
    }

    async find(){
        const connection = await getConnection();
        const result: any = await connection.manager.find(this.model);
        return result
    }

    async findAll(filter:any){
        const repository = await getRepository(this.model);
        const result: any = await repository.find(filter);
        return result
    }


    async create(body:object){
        const respository = await getRepository(this.model)
        return await respository.save(body);
    }

    async delete(filter:any){
        const connection = await getConnection();
        const user: any = await connection.manager.delete(this.model, filter);
        return user
    }

    async update(body:any, filter:any){
        const connection = await getConnection();
    
        return await connection.manager.update(this.model, filter, body);
    }

}