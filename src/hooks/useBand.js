import { useState, useEffect } from 'react';
import { GetBand } from '../controllers/band.controller';

export const useBand = (bandId) => {

    const [band, setBand] = useState(null);
  
    useEffect(() => {

      const fetchBand = async () => {
        const bandData = await GetBand(bandId);
        setBand(bandData);
      };
  
    fetchBand();
    }, [bandId]);
  
    return { band };
};