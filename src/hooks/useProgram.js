import { useState, useEffect } from 'react';
import { GetProgramByYear } from "../controllers/program.controller";

export const useProgram = (year) => {
    const [performances, setPerformances] = useState([])

    useEffect(() => {
        const fetchProgram = async () => {
            const program = await GetProgramByYear(year);
            setPerformances(program.performances)
        };

        fetchProgram();
    }, [year]);

  return { performances };

};