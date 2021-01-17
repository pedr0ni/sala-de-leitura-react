export interface Invoice {
    _id?: string,
    subtotal?: number,
    discount?: number,
    total?: number,
    validUntil?: Date,
    createdAt?: Date
}