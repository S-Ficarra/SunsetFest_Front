import { PerformanceModel } from "../models/performance.model";

export const PerformanceViewModel = {
    
    transformPerformanceDtoToPerformanceModel (performanceDto){
        return new PerformanceModel (
            performanceDto.id,
            performanceDto.band._name,
            performanceDto.band._id,
            performanceDto.stage._name,
            performanceDto.timeFrame._startingTime
        );
    }

};