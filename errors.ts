export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Network Error";
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Data Error";
    }
}