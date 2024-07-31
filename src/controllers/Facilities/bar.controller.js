import { BarService } from "../../services/Facilities/bar.service";
import { BarMapper } from "../../mappers/Facilities/bar.mapper";


export const GetAllBars = async (authHeader) => {

    let response = await BarService.fetchAllBar(authHeader);

    if (Array.isArray(response)) {
        let barsModelArray = response.map(dto => BarMapper.transformBarDtoToModel(dto));
        return barsModelArray;
    }

    throw new Error(`Error: ${response.data.message} Status code: ${response.response.status} ${response.response.statusText}`);

};
