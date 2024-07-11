import { PerformanceDto } from "../dto/performance.dto";

export const PerformanceService = {

    async fetchPerformance() {
      const response = await fetch('http://localhost:3000/performances');
      const data = await response.json();
      return data.map(performance => new PerformanceDto(
        performance._id,
        performance._band,
        performance._stage,
        performance._timeFrame
      ));
    },

}