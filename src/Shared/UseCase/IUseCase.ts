export interface IUseCase<T,U> {
    execute(request: T): Promise<U> | U
}