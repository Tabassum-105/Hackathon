export interface IUserFolio {
    id: string;
    firstName: string;
    lastName: string;
    balanceFunds: number;
}

export interface IOrder {
    fundName: string;
    transactionType: 'Buy' | 'Sell';
    quantity: number;
    orderValue: number;
}

export interface IShares {
    id: number;
    name: string;
}