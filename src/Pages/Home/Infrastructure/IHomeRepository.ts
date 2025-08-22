export interface IHomeRepository<U> {
    getAllData(): Promise<U>
}