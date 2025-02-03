const timeElapsed = (startTime) => {
  const currentTime = Date.now();
  const timeTaken = (currentTime - startTime) / 1000;
  return `[${timeTaken.toFixed(2)}]s`;
};

const task = (begin, finish, timeNeeded, next) => (details, time) => {
  const begun = begin(details, time);
  setTimeout(() => {
    const finished = finish(begun, time);
    next(finished, time);
  }, timeNeeded);
};

const currentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return hour < 12 ? `${hour}:${minutes}AM` : `${hour}:${minutes}PM`;
};

const orderDelivered = task(
  (details, orderdTime) => {
    console.log(`${timeElapsed(orderdTime)} Delivering order...`);
    return details;
  },
  (details, orderdTime) => {
    details.deliveryDetails = `Delivered by John at ${currentTime()}`;
    console.log(
      `${timeElapsed(orderdTime)} Order delivered:`,
      details,
    );
    return details;
  },
  5000,
  () => {
    console.log();
  },
);

const packOrder = task(
  (details, orderdTime) => {
    console.log(`${timeElapsed(orderdTime)} Packing order...`);
    return details;
  },
  (details, orderdTime) => {
    details.packageDetails = "Packed in eco-friendly box";
    console.log(`${timeElapsed(orderdTime)} Order packed:`, details);
    return details;
  },
  1000,
  orderDelivered,
);

const prepareFood = task(
  (details, orderdTime) => {
    console.log(`${timeElapsed(orderdTime)} Preparing food...`);
    return details;
  },
  (details, orderdTime) => {
    details.foodDetails = "Burger & Fries";
    console.log(
      `${timeElapsed(orderdTime)} Food is ready:`,
      details,
    );
    return details;
  },
  1000,
  packOrder,
);

const orderReceived = (orderDetails) => {
  const orderdTime = Date.now();
  console.log(
    `${timeElapsed(orderdTime)} Order received:`,
    orderDetails,
  );

  prepareFood(orderDetails, orderdTime);
};

const main = () => {
  const orderDetails = { orderID: 123 };
  orderReceived(orderDetails);
};

main();
