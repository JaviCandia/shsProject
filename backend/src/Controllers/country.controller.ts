import { Country } from '../Models/Entities/Country';
import { Request, Response } from 'express';
import { CountryService } from '../services/country.service';

export class countryController {
    private countryService: CountryService;

    constructor() {
        this.countryService = new CountryService();
    }

    async saveCountry(req: Request, res: Response) {
        await this.countryService.saveCountry(req);

        return res.status(201).send();
    }

    async getCountry(req: Request, res: Response){
        let countryId: number = +req.params.countryId;
        let country: Country = await this.countryService.getCountry(countryId);

        return res.status(200).send(country);
    }

    async getCountries(req: Request, res: Response){
        let respuesta = await this.countryService.getCountries();

        return res.status(200).send(respuesta);
    }

    async deleteCountry(req: Request, res: Response){
        let countryId: number = +req.params.countryId;
        await this.countryService.deleteCountry(countryId);

        return res.status(200).send();
    }

    // async updateCountry(req: Request, res: Response){
    //     let countryId: number = +req.params.countryId;
    //     await this.countryService.updateCountry(req, countryId)

    //     return res.status(204).send();
    // }
}

/*
    UN BANCKEND SE COMPONE DE 3 CAPAS:

    capa de datos. // se encarga de conectar a la bd y hace persistir la información
    capa de servicios. // validación de negocios.
    capa de controladores. // reciben solicitudes y mandan respuestas.
*/