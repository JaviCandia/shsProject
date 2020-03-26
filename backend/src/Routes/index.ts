import { routeInterface } from "../Models/route.interface";
import * as _ from 'lodash';
import { Initializer } from "../Config/initializer";
import { countryRoutes } from "./country.routes";

let init: Initializer = new Initializer();

const routesImported: Array<Array<routeInterface>> = [
    // agregar aquí el nuevo routes.ts
    countryRoutes
]

export const routesToExpress: Array<routeInterface> = 
_.flattenDepth(routesImported, 2).map((route: routeInterface) =>{
    route.controller = init.getController(route.controller.name)
    return route;
});