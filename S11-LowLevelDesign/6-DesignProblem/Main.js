const ParkingLot = require('./ParkingLot');
const ParkingFloor = require('./ParkingFloor');
const ParkingSpot = require('./ParkingSpot');
const Vehicle = require('./Vehicle');
const EntryPanel = require('./EntryPanel');
const ExitPanel = require('./ExitPanel');
const ParkingTicket = require('./ParkingTicket');
const ParkingSpotType = require('./ParkingSpotType');


// Create Panels
const entryPanel = new EntryPanel();
const exitPanel = new ExitPanel();

// Create Parking Lot

const parkingLot = new ParkingLot('PL1', 'Downtown Parking', '123 Main St', 5, entryPanel, exitPanel);

// Create Parking Floors
const floor1 = new ParkingFloor('F1');
const floor2 = new ParkingFloor('F2');
const floor3 = new ParkingFloor('F3');
const floor4 = new ParkingFloor('F4');


// Create Parking Spots
floor1.addSpot(new ParkingSpot('S1', ParkingSpotType.REGULAR));
floor1.addSpot(new ParkingSpot('S2', ParkingSpotType.REGULAR));
floor1.addSpot(new ParkingSpot('S3', ParkingSpotType.REGULAR));
floor1.addSpot(new ParkingSpot('S4', ParkingSpotType.HANDICAPPED));

floor2.addSpot(new ParkingSpot('S1', ParkingSpotType.REGULAR));
floor2.addSpot(new ParkingSpot('S2', ParkingSpotType.REGULAR));
floor2.addSpot(new ParkingSpot('S3', ParkingSpotType.REGULAR));
floor2.addSpot(new ParkingSpot('S4', ParkingSpotType.HANDICAPPED));

floor3.addSpot(new ParkingSpot('S1', ParkingSpotType.REGULAR));
floor3.addSpot(new ParkingSpot('S2', ParkingSpotType.REGULAR));
floor3.addSpot(new ParkingSpot('S3', ParkingSpotType.REGULAR));
floor3.addSpot(new ParkingSpot('S4', ParkingSpotType.HANDICAPPED));


floor4.addSpot(new ParkingSpot('S1', ParkingSpotType.REGULAR));
floor4.addSpot(new ParkingSpot('S2', ParkingSpotType.REGULAR));
floor4.addSpot(new ParkingSpot('S3', ParkingSpotType.REGULAR));
floor4.addSpot(new ParkingSpot('S4', ParkingSpotType.HANDICAPPED));


parkingLot.addFloor(floor1);
parkingLot.addFloor(floor2);
parkingLot.addFloor(floor3);
parkingLot.addFloor(floor4);

// create vehicles
const vehicle1 = new Vehicle('V1', 'CAR');  
const vehicle2 = new Vehicle('V2', 'TRUCK');
const vehicle3 = new Vehicle('V3', 'BUS');
const vehicle4 = new Vehicle('V4', 'MOTORCYCLE');
// const vehicle5 = new Vehicle('V5', 'BICYCLE');
// const vehicle6 = new Vehicle('V6', 'CAR');
// const vehicle7 = new Vehicle('V7', 'TRUCK');


const ticket1 = parkingLot.parkVehicle(vehicle1);
const ticket2 = parkingLot.parkVehicle(vehicle2);
const tieckt3 = parkingLot.parkVehicle(vehicle3);
const ticket4 = parkingLot.parkVehicle(vehicle4);


parkingLot.exitVehicle(ticket1);
parkingLot.exitVehicle(ticket2);
parkingLot.exitVehicle(ticket3);
parkingLot.exitVehicle(ticket4);