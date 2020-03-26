import { CountryRepository } from "../Repositories/Country.Repository";
import { Request } from "express";
import { Country } from "../Models/Entities/Country";

export class CountryService {
    private countryRepository: CountryRepository

    constructor(){
        this.countryRepository = new CountryRepository();
    }

    async saveCountry(req: Request){
        let country: Country = new Country();
        country.country = req.body.country;
        country.confirmed = req.body.confirmed;
        country.deaths = req.body.deaths;
        country.mortality = req.body.mortality;
        return await this.countryRepository.saveCountry(country);
    }

    async getCountry(countryId: number){
        return await this.countryRepository.getCountry(countryId);
    }
    
    async getCountries(){
        return await this.countryRepository.getCountries();
    }

    async deleteCountry(countryId: number){
        return await this.countryRepository.deleteCountry(countryId);
    }

    // async updateCountry(req: Request, countryId){
    //     let country: Country = await this.getCountry(countryId);
    //     country.country = req.body.country;
    //     country.confirmed = req.body.confirmed;
    //     country.deaths = req.body.deaths;
    //     country.mortality = req.body.mortality;
    //     return await this.countryRepository.saveCountry(countryId);
    // }
}