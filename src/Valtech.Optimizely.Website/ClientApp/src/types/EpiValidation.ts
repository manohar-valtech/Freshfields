export default interface EpiValidation {
    type: string;
    order: number;
    regex: string;
    message: string;
    sizeInBytes?: number;
    maxLength?: number;
}
