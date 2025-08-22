

export interface IRepositoryBase<T,U> {
    getById(request: T): Promise<U>;  
    create(request: T): Promise<U>;  
    update(request: T): Promise<U>;
    delete(request: T): Promise<U>;
}