import { injectable, inject } from "inversify";
import { IRepositoryBase } from "../../../Shared/Repositry/IRepositoryBase";
import HomeRequest from "../Domain/Dto/HomeRequest";
import HomeEntity from "../Domain/Entities/HomeEntity";
import { IHomeRepository } from "./IHomeRepository";
import { IHttpAdapter } from "../../../Shared/AppServiceContainer/Axios/IHttpAdapter";
import { types as TYPES } from "../ModuleContainer";

@injectable()
export default class HomeRepository implements IHomeRepository<Array<HomeEntity>>, IRepositoryBase<HomeRequest,HomeEntity> {
    constructor(@inject(TYPES.IHttpAdapter) private httpAdapter: IHttpAdapter) {}

    
    getById(request: HomeRequest): Promise<HomeEntity> {
        throw new Error("Method not implemented.");//call get method from httpAdapter
    }
    create(request: HomeRequest): Promise<HomeEntity> {
        throw new Error("Method not implemented.");//call post method from httpAdapter
    }
    update(request: HomeRequest): Promise<HomeEntity> {
        throw new Error("Method not implemented.");//call put method from httpAdapter
    }
    delete(request: HomeRequest): Promise<HomeEntity> {
        throw new Error("Method not implemented.");//call delete method from httpAdapter
    }
    getAllData(): Promise<HomeEntity[]> {
        throw new Error("Method not implemented.");//call get method from httpAdapter
    }
}