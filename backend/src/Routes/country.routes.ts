import { routeInterface } from "../Models/route.interface";
import { countryController } from "../Controllers/country.controller";

export const countryRoutes: Array<routeInterface> = [
    {
        url: "/countries",
        method: "get",
        controller: countryController,
        target: "getCountries" 
    },
    {
        url: "/country",
        method: "post",
        controller: countryController,
        target: "saveCountry"
    },
    {
        url: "/country/:countryId",
        method: "get",
        controller: countryController,
        target: "getCountry"
    },
    {
        url: "/country/:countryId",
        method: "delete",
        controller: countryController,
        target: "deleteCountry"
    },
    // {
    //     url: "/country/:countryId",
    //     method: "put",
    //     controller: countryController,
    //     target: "updateCountry"
    // }
]