const deliveryDetails = (orderStatus) => {
  console.log("Delivering order...");
  setTimeout(() => {
    orderStatus.deliveryDetails = "Delivered by John at 7:30 PM";
    console.log("Order delivered :", orderStatus);
  }, 5000);
};

const packOrder = (orderStatus) => {
  console.log("Packing order...");
  setTimeout(() => {
    orderStatus.packageDetails = "Packed in eco-friendly box";
    console.log(" Order packed:", orderStatus);
    deliveryDetails(orderStatus);
  }, 2000);
};

const prepareFood = (orderStatus, menu) => {
  console.log("Preparing food...");
  setTimeout(() => {
    orderStatus.foodDetails = menu;
    console.log("Food is ready:", orderStatus);
    packOrder(orderStatus);
  }, 3000);
};

const orderReceived = (menu) => {
  const orderStatus = {};
  const customerID = 123;
  orderStatus.customerID = customerID;
  console.log("Order received :", orderStatus);
  prepareFood(orderStatus, menu);
};

const main = () => {
  const menu = "Sweet";
  orderReceived(menu);
};

main();
