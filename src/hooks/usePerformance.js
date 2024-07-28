import { useState, useEffect } from 'react';
import { GetPerformance } from '../controllers/performance.controller';

export const usePerformance = (bandId) => {

  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    if (bandId) {
    const fetchPerformance = async () => {
        const perf = await GetPerformance(bandId)
        setPerformance(perf);
      };
  
      fetchPerformance();

    }
    }, [bandId]);
  
    return { performance };

  };