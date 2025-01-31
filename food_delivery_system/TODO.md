## TODO

# **what are the requirements ?**

- **Order Received** (Happens immediately, records the `startTime` and generates
  an `orderId`).
- **Preparing Food** (Takes 3 seconds, adds `foodDetails`).
- **Packing Order** (Takes 2 seconds, adds `packageDetails`).
- **Delivering Order** (Takes 5 seconds, adds `deliveryDetails`).
- **Order Delivered** (Final step, logs the full order summary and time
  elapsed).

## How should be the given output?

```
[0.00s] Order received: { orderId: 123 }
[0.01s] Preparing food...
[3.01s] Food is ready: { orderId: 123, foodDetails: 'Burger & Fries' }
[5.02s] Packing order...
[5.02s] Order packed: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box' }
[10.04s] Delivering order...
[10.04s] Order delivered: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }
```

# Steps

```
=> initial => {}

=> orderReceived => { orderId: 123 }

=> Food is ready => { orderId: 123, foodDetails: 'Burger & Fries' }

=> Order packed => { orderId: 123, foodDetails: 'Burger & Fries',
packageDetails: 'Packed in eco-friendly box' }

=> Order delivered => { orderId: 123, foodDetails: 'Burger & Fries',
packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by
John at 7:30 PM' }
```
