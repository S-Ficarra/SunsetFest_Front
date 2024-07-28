import { bandService } from "../services/band.service";
import { BandMapper } from "../mappers/band.mapper";

export const GetAllBands = async () => {

    const bandDtoArray = await bandService.fetchAllBands();
    const bandModels = bandDtoArray.map(dto => BandMapper.transformBandDtoToBandModel(dto))
    
    return bandModels;

};

export const GetBand = async (bandId) => { 

    const bandDto = await bandService.fetchBand(bandId);
    const bandModel = BandMapper.transformBandDtoToBandModel(bandDto);

    return bandModel;
}