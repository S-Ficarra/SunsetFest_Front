import { useState, useEffect } from 'react';
import { bandService } from '../services/band.service';
import { bandViewModel } from '../viewModels/band.viewModel';

export const useBands = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    bandService.fetchBands().then(bandDtos => {
      const bandModels = bandDtos.map(dto => bandViewModel.transformBandDtoToBandModel(dto));
      setBands(bandModels);
    });
  }, []);

  return { bands };
};