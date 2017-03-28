module app.domain {

    export interface IVehicleMake {
        id: number;
        name: string;
        niceName: string;        
        models: Array<IVehicleModel>;
    }
    
}