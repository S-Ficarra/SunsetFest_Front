import { StageModel } from "../models/stage.model"

export const StageMapper = {

    transformStageDtoToModel (stageDto) {
        console.log(stageDto);
        return new StageModel (
            stageDto.id,
            stageDto.name,
            stageDto.longitude,
            stageDto.latitude,
            stageDto.capacity            
        );
            
    },

};