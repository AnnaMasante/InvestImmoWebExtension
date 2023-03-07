export interface InvestInfo {
    features: Features,
    acquisitionCost: AcquisitionCost,
    earnings: Earnings,
    fundings: Fundings,
    expenses: Expenses
}

export interface Features {
    address: string,
    additionalInfo: string,
    city: string,
    province: string,
    postalCode: string,
    propertyType: string,
    acquisitionDate: Date
}

export interface AcquisitionCost {
    purchasePrice: number,
    brockerFees: number,
    legalFees: number,
    furnitureFees: number,
    renovationCost: number
}

export interface Earnings {
    operationMode: string,
    earningAmount: number,
}

export interface Fundings{
    downPayment: number,
    askedPrice: number,
    mortgage: number,
    amortizationPeriod: number,
    rate: number
}

export interface Expenses {
    coOwnership: number,
    homeMaintenance: number,
    propertyTax: number,
    rentalManagementFees: number,
    accountingExpenses: number,
    subscriptions: number,
    insurances: number
}
