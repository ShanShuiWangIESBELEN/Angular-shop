export interface ProductsNew {
    product_id: number;
    product_name: string;
    cost: number;
    details: string;
    supplier: number;
}

export const productsNew = [
    {
        product_id: 10,
        product_name: "Phone Minimini",
        cost: 599,
        details: "Un movil preciososisimo",
        supplier: 2
    },
    {
        product_id: 11,
        product_name: "Phone Maxixixix",
        cost: 1099,
        details: "Un movil grandisisimo",
        supplier: 4
    },
]