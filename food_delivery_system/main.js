const timeElapsed = (startTime, currentTime) => {
  const timeTaken = (currentTime - startTime) / 1000;
  return `[${timeTaken.toFixed(2)}]s`;
};

const deliveryDetails = (orderStatus, initialTime) => {
  console.log(`${timeElapsed(initialTime, Date.now())} Delivering order...`);
  setTimeout(() => {
    orderStatus.deliveryDetails = `Delivered by John at 7:30 PM`;
    console.log(
      `${timeElapsed(initialTime, Date.now())} Order delivered :`,
      orderStatus,
    );
  }, 5000);
};

const packOrder = (orderStatus, initialTime) => {
  console.log(`${timeElapsed(initialTime, Date.now())} Packing order...`);
  setTimeout(() => {
    orderStatus.packageDetails = "Packed in eco-friendly box";
    console.log(
      `${timeElapsed(initialTime, Date.now())} Order packed:`,
      orderStatus,
    );
    deliveryDetails(orderStatus, initialTime);
  }, 2000);
};

const prepareFood = (orderStatus, menu, initialTime) => {
  const currentTime = Date.now();
  console.log(`${timeElapsed(initialTime, currentTime)} Preparing food...`);

  setTimeout(() => {
    orderStatus.foodDetails = menu;
    console.log(
      `${timeElapsed(initialTime, Date.now())} Food is ready:`,
      orderStatus,
    );
    packOrder(orderStatus, initialTime);
  }, 3000);
};

const orderReceived = (menu) => {
  const initialTime = Date.now();
  const orderStatus = {};
  const customerID = 123;
  orderStatus.customerID = customerID;

  console.log(
    `${timeElapsed(initialTime, initialTime)} Order received :`,
    orderStatus,
  );
  prepareFood(orderStatus, menu, initialTime);
};

const main = () => {
  const menu = "Sweet";
  orderReceived(menu);
};

main();
