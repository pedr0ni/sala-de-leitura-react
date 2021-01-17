export interface AccountMembership {
    paymentMethod?: "credit-card" | "bank-slip" | string,
    creditCard?: string,
    validUntil?: string,
    ccv?: string
}

export default interface Account {
    _id?: string,
    name?: string,
    email?: string,
    birth?: string,
    phone?: string,
    password?: string,
    lastLogin?: Date,
    membership?: AccountMembership,
    createdAt?: string
}