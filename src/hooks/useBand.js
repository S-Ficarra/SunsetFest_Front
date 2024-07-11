import { useState, useEffect } from 'react';
import { bandService } from '../services/band.service';
import { bandViewModel } from '../viewModels/band.viewModel';

export const useBand = (bandId) => {
    const [band, setBand] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const bandDto = await bandService.fetchBand(bandId);
        const bandModel = bandViewModel.transformBandDtoToBandModel(bandDto);
        setBand(bandModel);
      };
  
    fetchData();

    }, [bandId]);
  
    return { band };
  };