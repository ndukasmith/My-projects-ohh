const carModel = {
    id: 1,
    type: "bmw",
    model: 2008,
    price: 2000,
    origin: "Syria", // Example origin, you can replace it with the actual origin of the customer
    isRefugee: true // Example flag indicating refugee status
};

function calculateDiscount(car) {
    // Check if the customer is from a specific country and is a refugee
    if (car.origin === "Syria" && car.isRefugee) {
        // Apply a discount of 10%
        car.price -= car.price * 0.1;
    }
    return car;
}

// Example usage:
console.log("Original price:", carModel.price);
calculateDiscount(carModel);
console.log("Price after discount:", carModel.price);
