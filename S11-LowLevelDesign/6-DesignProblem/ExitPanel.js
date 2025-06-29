class ExitPanel{
    calculateAmount(){

        const duration = parkingTicket.getExitTime() - parkingTicket.getEntryTime();
        const hours = Math.floor(duration / (1000 * 60 * 60));
        return hours * 10; 

    }

    checkout(parkingTicket){
        parkingTicket.setExitTime(new Date());
        const amount = this.calculateAmount(parkingTicket);
        parkingTicket.setAmoutn(amount);
        parkingTicket.setPaid(true);
        return parkingTicket;
    }
}

module.exports = ExitPanel;