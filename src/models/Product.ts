export interface Product {
    product_id: number;
    shop_id: number;
    product_name: string;
    price: number;
    quantity: number;
};

export const products: Product[] = [
    { product_id: 1, shop_id: 1, product_name: "RX-78-2 Gundam 1:65 Scale", price: 23, quantity: 10},
    { product_id: 2, shop_id: 1, product_name: "Kanon Shibuya Nesoberi", price: 23, quantity: 10},
];