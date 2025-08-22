export interface IAvailabilityProductsRepository<T,U> {
    getAvailability(request: T): Promise<U>;
}