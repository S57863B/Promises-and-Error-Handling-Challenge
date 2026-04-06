import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.js';

const runApplication = () => {
    console.log("Starting application...");

    fetchProductCatalog()
        .then(products => {
            console.log("\n--- Product Catalog ---", products);

            // Fetch reviews for all products concurrently using Promise.all
            const reviewPromises = products.map(product => 
                fetchProductReviews(product.id).then(reviews => {
                    console.log(`\n--- Reviews for ${product.name} (ID: ${product.id}) ---`, reviews);
                })
            );

            return Promise.all(reviewPromises);
        })
        .then(() => {
            // Once all reviews are fetched, get the sales report
            return fetchSalesReport();
        })
        .then(salesReport => {
            console.log("\n--- Sales Report ---", salesReport);
        })
        .catch(error => {
            // Handles any rejection from the chain above
            console.error("\n[ERROR CAUGHT]:", error);
        })
        .finally(() => {
            // Cleanup / final message regardless of success or failure
            console.log("\nAll API calls have been attempted. Process finished.");
        });
};

runApplication();