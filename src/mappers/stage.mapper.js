import { StageModel } from "../models/stage.model"

export const StageMapper = {

    transformStageDtoToModel (stageDto) {
        return new StageModel (
            stageDto.id,
            stageDto.name,
            {lat : parseFloat(stageDto.latitude), lng : parseFloat(stageDto.longitude)},           
            stageDto.capacity            
        );
            
    },

};