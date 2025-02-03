# Food Delivery System

A JavaScript application that simulates a food delivery order workflow with multiple stages including order placement, food preparation, packing, and delivery.

## Overview

This project demonstrates different JavaScript async patterns by simulating a complete food delivery lifecycle. The system tracks an order through several stages, each with its own processing time, and logs timestamped updates showing the progress.

## How It Works

The food delivery process follows these steps:

1. **Order Received** - Order is placed and immediately recorded with a unique order ID (0s)
2. **Preparing Food** - Kitchen prepares the food (3 seconds)
3. **Packing Order** - Order is packed into an eco-friendly box (2 seconds)
4. **Delivering Order** - Order is dispatched and delivered (5 seconds)
5. **Order Delivered** - Final confirmation with all details

## Running the Application

### Using main.js (Callback Pattern)
```bash
node main.js
```

### Using food_order.js (Higher-Order Function Pattern)
```bash
node food_order.js
```

### Using async_workflow.js (Promise Pattern)
```bash
node async_workflow.js
```

## Expected Output

All versions produce similar timestamped output showing the progression of an order:

```
[0.00s] Order received: { customerID: 123 }
[0.01s] Preparing food...
[3.01s] Food is ready: { customerID: 123, foodDetails: 'Burger & Fries' }
[5.02s] Packing order...
[5.02s] Order packed: { customerID: 123, ... }
[10.04s] Delivering order...
[10.04s] Order delivered: { customerID: 123, ... }
```

## Key Concepts Demonstrated

- **Callbacks** - Nested setTimeout patterns for sequential async operations
- **Higher-Order Functions** - Abstracted task patterns for code reusability
- **Promises** - Cleaner async flow with `.then()` chaining
- **Time Tracking** - Elapsed time calculation for each stage

## Total Execution Time

The complete order process takes approximately **10 seconds** (3s + 2s + 5s).
