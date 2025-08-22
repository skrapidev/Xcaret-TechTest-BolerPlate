import { inject, injectable } from "inversify";
import { IAvailabilityProductsRepository } from "./IAvailabilityProductsRepository";
import { ProductAvailabilityEntity } from "../Domain/Entities";
import { ProductAvailabilityRequest } from "../Domain/Dto";
import { types as TYPES } from "../ModuleContainer";
import { IHttpAdapter } from "../../../Shared/AppServiceContainer";

@injectable()
export default class AvailabilityProductsRepository implements IAvailabilityProductsRepository<ProductAvailabilityRequest,Array<ProductAvailabilityEntity>>{
     constructor(@inject(TYPES.IHttpAdapter) private httpAdapter: IHttpAdapter) {}
    getAvailability(request: ProductAvailabilityRequest): Promise<ProductAvailabilityEntity[]> {
        const  params = `?code=${request.productCode}&date=${request.visitDate}&adults=${request.adults}&children=${request.children}&infants=${request.infants}`
        return this.httpAdapter.get<ProductAvailabilityEntity[]>(`/Availability/Product${params}`);
    }
    
}