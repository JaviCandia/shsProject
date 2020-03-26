import { countryController } from "../Controllers/country.controller";

export class Initializer {
    // instanciar el nuevo controller, inicializarlo en el constructor y usarlo en el switch
    private countryController: countryController;

    // Se crea una copia en memoria, para que no se estén creando varias veces.
    constructor() {
        this.countryController = new countryController();
    }

    getController(prototype: string) {
        switch (prototype) {
            case countryController.name:
                return this.countryController;
            default:
                break;
        }
    }
}