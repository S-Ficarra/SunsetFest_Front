import { InformationService } from "../services/information.service";
import { InformationMapper } from "../mappers/information.mapper";

export const GetAllInformations = async () => {

    const informationsDtoArray = await InformationService.fetchAllInformation();
    const informationsModelArray = informationsDtoArray.map(dto => InformationMapper.transformInformationDtoToInformationModel(dto));

    return informationsModelArray;
}