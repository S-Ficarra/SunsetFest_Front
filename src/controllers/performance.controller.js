import { PerformanceService } from "../services/performance.service";
import { PerformanceMapper } from "../mappers/performance.mapper";

export const GetPerformance = async (bandId) => {

    const perfsDtoArray = await PerformanceService.fetchPerformances();
    const perfsModelArray = perfsDtoArray.map(dto => PerformanceMapper.transformPerformanceDtoToPerformanceModel(dto))
    const performance = perfsModelArray.find(performance => performance.bandId === parseInt(bandId));

    return performance;

};