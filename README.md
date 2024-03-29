# Cost of Shipping Calculation API Documentation

## Overview

This API allows users to calculate the shipping cost for products based on the product ID and the destination zip code. The calculation considers the product's value and the destination location to determine the shipping cost.

## Getting Started

Before starting to use the API, you need to set up your development environment. This project requires Node.js and Express to be installed.

## Installation

Clone the repository to your local machine and install the necessary dependencies with the following command:

```bash
npm install
```

To start the server, run:

```bash
node indes.js
```

The server will be running at http://localhost:3000.

## API Endpoints

The API has three main endpoints:

**1. List Products**
GET /products
Returns a list of all available products.
**2. Product Details**
GET /products/:productId
Returns details of a specific product.
Parameters:
productId: ID of the desired product.
**3. Calculate Shipping**
GET /products/:productId/shipping/:zipcode
Calculates the shipping for a specific product, based on the destination zip code.
Parameters:
productId: ID of the product for which the shipping will be calculated.
zipcode: Destination zip code for delivery (no punctuation).

## Shipping Calculation Rules

The shipping cost is calculated based on the product's value and the destination state, following the rules below:

Standard shipping fee: 12% of the product's value.
For the states of BA, SE, AL, PE, and PB: 10% of the product's value.
For the states of SP and RJ: 15% of the product's value.

```
Example Response
json
{
    "product": {
        "id": 1,
        "name": "Keychron K2 Mechanical Keyboard",
        "value": 100000
    },
    "state": "BA",
    "shipping": 10000
}
```

## Error Handling

The API returns specific errors for situations such as product not found or invalid zip code. Example of an error response:

```
json
{
    "error": "Product not found"
}
```

## Contributions

Contributions are welcome! To contribute, please fork the repository, create a branch for your feature or bug fix, and submit a pull request.
