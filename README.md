# Async Promises Lab: Resilient API Simulator

This project is a TypeScript-based application designed to demonstrate the power of asynchronous programming in JavaScript/TypeScript. It simulates fetching data from multiple endpoints, handles dependencies between API calls, and implements robust error management.

## Features

* **Promise Chaining:** Sequentially fetches a product catalog, product reviews, and a sales report using `Promise.all()` for concurrent requests.
* **Custom Error Handling:** Utilizes custom `NetworkError` and `DataError` classes for precise error identification.
* **Resiliency:** Implements a recursive `retryPromise` utility that automatically intercepts failed requests and retries them up to 3 times before failing gracefully.
* **Mock Delay Simulation:** Uses `setTimeout` to mimic real-world network latency.

## Setup & Installation

1. Clone or download this repository.
2. Navigate to the project directory in your terminal:
   cd async-promises-lab
3. Run the program by typing node index.js in your terminal.