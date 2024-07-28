import { StageDto } from "../dto/stage.dto";
import { BASE_URL } from "../App";

export const StageService = {

    async fetchAllStages () {
        const response = await fetch (`${BASE_URL}stages`);
        const data = await response.json();
        return data.map(stage => new StageDto (
            stage._id,
            stage._name,
            stage._longitude,
            stage._latitude,
            stage._capacity,
            stage._type
        ));
    },

};