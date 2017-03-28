module app.vehicles {

    interface IVehicleListBindings {
        // Define any bindings here.

    }

    interface IVehicleListController extends IVehicleListBindings {        
        vehicles: Array<IVehicle>;
    }

    class VehicleListController implements IVehicleListController {        

        vehicles: Array<IVehicle>;

        constructor() {

        }

        $onInit: () => {
            vehicles =  new Array<IVehicle>();
        }

        $onChanges: (changes: any) => {

        }
        
    }

    export class VehicleListComponent implements ng.IComponentOptions {

        public bindings: any;
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.bindings = {};
            this.controller = VehicleListController;
            this.templateUrl = 'vehicle-list.component.html';     
        }
    }

    angular.module('app').component('vehicleList', new VehicleListComponent);

}