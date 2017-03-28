module app.domain {
    
    export interface IVehicleYear {
        id: number;
        year: number;
    }

    export class VehicleYear implements IVehicleYear {
        constructor(public id: number, public year: number) {
        };
    }
}