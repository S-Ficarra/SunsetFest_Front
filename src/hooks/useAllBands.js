import { useState, useEffect } from 'react';
import { GetAllBands } from '../controllers/band.controller';

export const useAllBands = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchAllBands = async () => {
      const bands = await GetAllBands()
      setBands(bands);
    }

    fetchAllBands();
    }, []);

  return { bands };
};