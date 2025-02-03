const prepareFood = (orderDetails) => {
  return new Promise((reserver, rejected) => {
    console.log("Preparing food...");
    setTimeout(() => {
      orderDetails.item = "Biriyani";
      console.log("Food is ready:", orderDetails);
      reserver(orderDetails);
    }, 1000);
  });
};

const packingFood = (orderDetails) => {
  return new Promise((reserver, rejected) => {
    console.log("Packing order...");
    setTimeout(() => {
      orderDetails.packageDetails = "Packed in eco-friendly box";
      console.log("Order packed:", orderDetails);
      reserver(orderDetails);
    }, 1000);
  });
};

const deliveredOrder = (orderDetails) => {
  return new Promise((reserver, rejected) => {
    console.log("Delivering order...");
    setTimeout(() => {
      orderDetails.deliveryDetails = "Delivered by John at 7:30 PM";
      console.log("Order delivered:", orderDetails);
      reserver(orderDetails);
    }, 5000);
  });
};

prepareFood({ orderID: 123 }).then(packingFood).then(deliveredOrder);
