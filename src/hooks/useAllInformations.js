import { useState, useEffect } from 'react';
import { GetAllInformations } from '../controllers/informations.controller';

export const useAllInformations = () => {

    const [allInformations, setAllInformations] = useState([]);

    useEffect(() => {
        const fetchAllInformation = async () => {
            const informationsModel = await GetAllInformations()
            setAllInformations(informationsModel);
        };

        fetchAllInformation()
    }, []);

    return { allInformations };
};