import { NetworkError, DataError } from "./errors.js";
export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
export const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { user: "Anna", rating: 5, comment: "Works perfectly!" },
                    { user: "Jeff", rating: 4, comment: "Good value." }
                ]);
            }
            else {
                reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};
export const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 4321, unitsSold: 123, averagePrice: 700 });
            }
            else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};
//# sourceMappingURL=apiSimulator.js.map