const passengerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const flightData = [
  {
    id: 1,
    originCity: "Pune",
    destinationCity: "Mumbai",
    departureDate: "2021-10-18",
    returnDate: "2021-11-01",
    price: 5000,
    returnPrice: 9500,
    flightInfo: {
      code: "AI-201",
      journeyCode: "PNQ > MUM",
      departTime: "10:00 AM",
      arriveTime: "12:00 AM",
    },
    returnFlightInfo: {
      code: "AI-202",
      journeyCode: "MUM > PNQ",
      departTime: "08:00 PM",
      arriveTime: "11:00 PM",
    },
  },
  {
    id: 2,
    originCity: "Pune",
    destinationCity: "Delhi",
    departureDate: "2021-10-18",
    returnDate: "2021-11-01",
    price: 8000,
    returnPrice: 12000,
    flightInfo: {
      code: "AI-201",
      journeyCode: "PNQ > DEL",
      departTime: "10:00 AM",
      arriveTime: "12:00 AM",
    },
    returnFlightInfo: {
      code: "AI-202",
      journeyCode: "DEL > PNQ",
      departTime: "08:00 PM",
      arriveTime: "11:00 PM",
    },
  },
  {
    id: 3,
    originCity: "Pune",
    destinationCity: "Delhi",
    departureDate: "2021-10-18",
    returnDate: "2021-11-01",
    price: 10000,
    returnPrice: 15000,
    flightInfo: {
      code: "AI-203",
      journeyCode: "PNQ > DEL",
      departTime: "10:00 AM",
      arriveTime: "12:00 AM",
    },
    returnFlightInfo: {
      code: "AI-204",
      journeyCode: "DEL > PNQ",
      departTime: "08:00 PM",
      arriveTime: "11:00 PM",
    },
  },
  {
    id: 4,
    originCity: "Pune",
    destinationCity: "Delhi",
    departureDate: "2021-10-18",
    returnDate: "2021-11-01",
    price: 15000,
    returnPrice: 20000,
    flightInfo: {
      code: "AI-207",
      journeyCode: "PNQ > DEL",
      departTime: "10:00 AM",
      arriveTime: "12:00 AM",
    },
    returnFlightInfo: {
      code: "AI-208",
      journeyCode: "DEL > PNQ",
      departTime: "08:00 PM",
      arriveTime: "11:00 PM",
    },
  },
];

export { passengerCount, flightData };
