import { useState, useEffect } from 'react';
import { PerformanceService } from '../services/performance.service';
import { PerformanceViewModel } from '../viewModels/performance.viewModel';

export const usePerformance = (bandId) => {
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const performanceDto = await PerformanceService.fetchPerformance();
        const performanceModels = performanceDto.map(dto => PerformanceViewModel.transformPerformanceDtoToPerformanceModel(dto));
        const filteredPerformance = performanceModels.find(performance => performance.bandId === bandId);
        setPerformance(filteredPerformance);
      };
  
      fetchData();
    }, [bandId]);
  
    return { performance };
  };