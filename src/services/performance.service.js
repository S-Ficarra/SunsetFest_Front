import { PerformanceDto } from "../dto/performance.dto";
import { BASE_URL } from "../App";

export const PerformanceService = {

    async fetchPerformances() {
      const response = await fetch(`${BASE_URL}performances`);
      const data = await response.json();
      return data.map(performance => new PerformanceDto(
        performance._id,
        performance._band,
        performance._stage,
        performance._timeFrame
      ));
    },

}