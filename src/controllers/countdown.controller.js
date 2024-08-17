import { CountdownService } from "../services/countdown.service";
import { CountdownMapper} from "../mappers/countdown.mapper";

export const GetCountdown = async (countdownId) => {

    const countdownDto = await CountdownService.fetchCountdown(countdownId);  
    const countdownModel = CountdownMapper.transformCountdownDtoToModel(countdownDto);

    return countdownModel;
    
};