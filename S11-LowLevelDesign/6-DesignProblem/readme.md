Functional Requirements: (5-10% of the time)
- Ability to park a vehicle
- Support multiple floors
- Support multiple vehicle types: Car, Truck, Motorbike
- Payment: 
    - Hourly payment
    - Lumpsum
- Ticket:
- One Entry and On Exit
- Spot Assignment Strategy
- Display Panel
- Spot Types 
 

Non Functional Requirements (NFRs):
- Maintanable / Extensible
- High Cohesion
- Low Coupling
- Security


Identify the major entitites of the system (Bottom Up)
Identify Entity?
-- Establishing Relationships 
Vehicle
- vehicleId
- type (Relationship) => IS A (ENUM) Car, 2W, 3W, Electric, Truck ....


ParkingSpot 
-- Associated with a vehicle
- id: <UNIQUE>     1,2,3 
- Type (ENUM) IS-A Relationship 
- isEmpty
- isClosed
// - floorId: Help me decide reaching the parking spot. Violating Law of Demeter
- sensorId:
- vechicle: 
+ parkVehicle(vechicle) 
+ unparkVehicle()



ParkingFloor:
id: 
floorNumber:
isClosed: 
isFull: 
parkingSpots: [<ParkingSpot>]           => Composition Relationship
spotsEmpty: Number

+getParkingSpot()
+ isParking

- markFull() ==> 
- unmarkFull()
+ addSpot()
+ removeSpot(spot)
+ getAvailableSpot(): Spot
+ getOccupiedSpots(): [<Spot>]
+ parkVehicle(vehcile): Spot
    * spot.parkVehicle(vehicle)

+ unparkVehicle(vechicle, spot):




ParkingLot: 
id:
name:
address:
parkingFloors: [<ParkingFloor>]
isClosed: 
isFull:
entryPanel: 
exitPanel:
ticketingSytem: 
displayPanel: 

+ parkVehicle(vehicle): Ticket
    * loop through the floors and attempt parking
        * if the parking floor is full /closed or not and then 
        * Delegate to parking floor

    * Get avaialble spots
        * Iterate over floors 
        * Figure out the approprite spots 
    
    * use Entrypanel to 





+ exitVehicle(Ticket)


EntryGate: 
PaymentPlan: ENUM <Hourly, Daily>
+ generateTicket(vehicle, spot, floor): ParkingTicket
+ openGate()
+ closeGate()

ParkingTicket
vehicle
spot
entryTime
exitTime
floor
//
Payment 
amount 
tarifType: 


ExitGate
+ checkout(Ticket)
    * 

- calculatePayment(vechicle, spot, entryTime): Numeric Value 

- makePayment

ParkingDiscussion for the following:
DisplayPanel. Payment

Ticket

// OOPS Language
class Burger {

    Burger(String bun) { ... }

    Burger(String bun, String patty) { ... }

    Burger(String bun, String patty, String cheese) { ... }

    Burger(String bun, String patty, String cheese, boolean lettuce) { ... }

}