import { StageService } from "../services/stage.service";
import { StageMapper } from "../mappers/stage.mapper";

export const GetAllStages = async () => {

    const stageDtoArray = await StageService.fetchAllStages();
    const stageModelArray = stageDtoArray.map(dto => StageMapper.transformStageDtoToModel(dto));

    return stageModelArray;

};