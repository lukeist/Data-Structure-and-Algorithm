// // Assume latency = 0 and only use non relational DB (MongoDB). Create all tables needed for this problem:
// /*
// Create a payment system that provides the daily commuter payment system for cal Train

// System Does the following
// 1) Has a knowledge fare chart with listed stations and fare charge between stations
// 2) Issue a clipper card to Commuter
// 3) Provide balance related functionality to Commuter
// 	- Check Balance, Add Balance

// 4) Provide Commuter Journey features
// 	- Commuter taps the clipper card to initiate the journey, Taps again to end the journey
// 	- Fare for source and destination is calculated, and deducted from the clipper card balance

// FareChart = {
// 		SF:{
// 		src: "San Francisco",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		22nd:{
// 		src: "22nd St",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		SSF:{
// 		src: "South San Francisco",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		SB:{
// 		src: "San Bruno",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		Mil:{
// 		src: "Millebre",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		SM:{
// 		src: "San Mateo",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		RC:{
// 		src: "Redwood City",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		Men:{
// 		src: "Menlo Park",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		PA:{
// 		src: "Palo Alto",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},
// 		MV:{
// 		src: "Mountain View",
// 		fareSourceDifference: 0,
// 		fareDestinationDifference: 1$,
// 		},

// 	}
// */

// // Here are the tables that would be needed to implement the payment system described:

// // Fare Chart table
// // Columns: src (string), fareSourceDifference (float), fareDestinationDifference (float)
// // Clipper Card table
// // Columns: cardNumber (string), balance (float)
// // Journey table
// // Columns: cardNumber (string), source (string), destination (string), fare (float)
// // Transaction table
// // Columns: cardNumber (string), type (string), amount (float), date (date)
// // The Fare Chart table would contain all the fare information for each station. The Clipper Card table would store the balance for each card. The Journey table would store information about each journey made by a commuter, including the source and destination stations and the fare charged. The Transaction table would store all transactions made with a Clipper Card, including adding balance and deducting fare.

// // Here are some possible APIs that could be used to connect the tables together:

// // Get Fare API
// // This API would allow a client to request the fare information for a particular source and destination station.
// // Parameters: src (string), dest (string)
// // Returns: fare (float)
// // Check Balance API
// // This API would allow a client to check the balance on their Clipper Card.
// // Parameters: cardNumber (string)
// // Returns: balance (float)
// // Add Balance API
// // This API would allow a client to add balance to their Clipper Card.
// // Parameters: cardNumber (string), amount (float)
// // Returns: success (boolean)
// // Initiate Journey API
// // This API would allow a client to initiate a journey with their Clipper Card.
// // Parameters: cardNumber (string), src (string)
// // Returns: success (boolean)
// // End Journey API
// // This API would allow a client to end a journey with their Clipper Card and have the fare deducted from their balance.
// // Parameters: cardNumber (string), dest (string)
// // Returns: success (boolean)

// // Text diagram that shows the connections between those tables together. Explain how each connection works:

// // Here is a text-based diagram that shows the connections between the tables and explains how each connection works:

// // Fare Chart <-- (foreign key src) --> Journey

// // The Fare Chart table and the Journey table are connected through a foreign key on the src field. This means that each record in the Journey table must contain a valid src value that exists in the Fare Chart table. When a new journey is added to the Journey table, the src value is checked against the Fare Chart table to ensure that it is valid.
// // Clipper Card <-- (foreign key cardNumber) --> Journey
// // <-- (foreign key cardNumber) --> Transaction History

// // The Clipper Card table and the Journey table are connected through a foreign key on the cardNumber field. This means that each record in the Journey table must contain a valid cardNumber value that exists in the Clipper Card table. When a new journey is added to the Journey table, the cardNumber value is checked against the Clipper Card table to ensure that it is valid.
// // The Clipper Card table and the Transaction History table are also connected through a foreign key on the cardNumber field. This means that each record in the Transaction History table must contain a valid cardNumber value that exists in the Clipper Card table. When a new transaction is added to the Transaction History table, the cardNumber value is checked against the Clipper Card table to ensure that it is valid.
// // User <-- (foreign key cardNumber) --> Clipper Card
// // <-- (foreign key userId) --> Payment Method

// // The User table and the Clipper Card table are connected through a foreign key on the cardNumber field. This means that each record in the Clipper Card table must contain a valid cardNumber value that exists in the User table. When a new Clipper card is added to the Clipper Card table, the cardNumber value is checked against the User table to ensure that it is valid.
// // The User table and the Payment Method table are connected through a foreign key on the userId field. This means that each record in the Payment Method table must contain a valid userId value that exists in the User table. When a new payment method is added to the Payment Method table, the userId value is checked against the User table to ensure that it is valid.

// // Here is a text diagram showing the connections between the tables described in the previous examples:

// // Fare Chart <-- Journey
// // Clipper Card <-- Journey
// // Transaction History <-- Clipper Card
// // User <-- Clipper Card

// // The Fare Chart table is connected to the Journey table through the "source" and "destination" fields. When a journey is created, the source and destination stations are looked up in the Fare Chart table to determine the fare charged for the journey.
// // The Clipper Card table is connected to the Journey table through the "cardNumber" field. When a journey is created, the card number is used to look up the Clipper card used for the journey and update the balance.
// // The Transaction History table is connected to the Clipper Card table through the "cardNumber" field. When a transaction is created, the card number is used to look up the Clipper card associated with the transaction and update the transaction history.
// // The User table is connected to the Clipper Card table through the "cardNumber" field. When a user is created, a Clipper card is issued to them and the card number is stored in both the User and Clipper Card tables. This allows for easy lookup of a user's details using their Clipper card number.

async function getFareChart() {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Fare Chart collection from the database
  const fareChartCollection = db.collection("Fare Chart");

  // Find all records in the Fare Chart collection
  const fareChart = await fareChartCollection.find({}).toArray();

  // Return the fare chart
  return fareChart;
}

async function issueClipperCard(cardNumber, balance) {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Clipper Card collection from the database
  const clipperCardCollection = db.collection("Clipper Card");

  // Insert a new Clipper card record into the collection
  await clipperCardCollection.insertOne({
    cardNumber,
    balance,
  });

  // Return the card number of the newly issued Clipper card
  return cardNumber;
}

async function checkBalance(cardNumber) {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Clipper Card collection from the database
  const clipperCardCollection = db.collection("Clipper Card");

  // Find the Clipper card record with the specified card number
  const clipperCard = await clipperCardCollection.findOne({ cardNumber });

  // Return the balance of the Clipper card
  return clipperCard.balance;
}

async function initiateJourney(cardNumber, sourceId) {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Journey collection from the database
  const journeyCollection = db.collection("Journey");

  // Insert a new Journey record into the collection
  await journeyCollection.insertOne({
    cardNumber,
    sourceId,
    startTimestamp: new Date(),
  });
}

async function calculateFare(cardNumber, sourceId, destinationId) {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Fare Chart collection from the database
  const fareChartCollection = db.collection("Fare Chart");

  // Find the Fare Chart record for the source station
  const sourceFare = await fareChartCollection.findOne({ src: sourceId });

  // Find the Fare Chart record for the destination station
  const destinationFare = await fareChartCollection.findOne({
    src: destinationId,
  });

  // Calculate the fare for the journey
  const fare =
    destinationFare.fareDestinationDifference - sourceFare.fareSourceDifference;

  // Retrieve the Clipper Card collection from the database
  const clipperCardCollection = db.collection("Clipper Card");

  // Find the Clipper card record with the specified card number
  const clipperCard = await clipperCardCollection.findOne({ cardNumber });

  // Calculate the new balance for the Clipper card
  const newBalance = clipperCard.balance - fare;

  // Update the Clipper card record with the new balance
  await clipperCardCollection.updateOne(
    { cardNumber },
    { $set: { balance: newBalance } }
  );

  // Return the fare for the journey
  return fare;
}

async function calculateFare(cardNumber, sourceId, destinationId) {
  // Connect to the database
  const db = await connectToDatabase();

  // Retrieve the Fare Chart and Clipper Card collections from the database
  const fareChartCollection = db.collection("Fare Chart");
  const clipperCardCollection = db.collection("Clipper Card");

  // Find the Fare Chart records for the source and destination stations
  const [sourceFare, destinationFare] = await Promise.all([
    fareChartCollection.findOne({ src: sourceId }),
    fareChartCollection.findOne({ src: destinationId }),
  ]);

  // Calculate the fare for the journey
  const fare =
    destinationFare.fareDestinationDifference - sourceFare.fareSourceDifference;

  // Find the Clipper card record with the specified card number
  const clipperCard = await clipperCardCollection.findOne({ cardNumber });

  // Calculate the new balance for the Clipper card
  const newBalance = clipperCard.balance - fare;

  // Update the Clipper card record with the new balance
  await clipperCardCollection.updateOne(
    { cardNumber },
    { $set: { balance: newBalance } }
  );

  // Return the fare for the journey
  return fare;
}
