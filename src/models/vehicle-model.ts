module app.domain {

    export interface IVehicleModel {
        id: number;
        name: string;
        niceName: string;
        years: Array<IVehicleYear>;
    }

    export class VehicleModel implements IVehicleModel {
        constructor(public id: number, public name: string, public niceName: string, public years: Array<IVehicleYear>) {

        }
    }
}