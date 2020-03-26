import { Repository } from "typeorm";
import { Country } from '../Models/Entities/Country';
import { connect } from "../Config/Database.Connection";

export class CountryRepository {
    private repository: Repository<Country>;

    async getConnection() {
        if (!this.repository) {
            this.repository = (await connect()).getRepository(Country);
        }
    }

    async saveCountry(country: Country) {
        await this.getConnection();
        return await this.repository.save(country);
    }

    async getCountry(countryId: number) {
        await this.getConnection();
        return await this.repository.findOne({ id: countryId });
    }

    async getCountries(){
        await this.getConnection();
        return await this.repository.find();
    }

    async deleteCountry(countryId: number) {
        await this.getConnection();
        return await this.repository.delete({ id: countryId })
    }
}

// Acceso a datos