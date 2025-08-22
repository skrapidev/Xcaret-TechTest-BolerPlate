export interface ProductAvailabilityRequest {
    productCode: string;
    visitDate: Date
    adults: number;
    children: number;
    infants: number;
}