import { useState, useEffect } from 'react';
import { InformationService } from '../services/information.service';
import { InformationViewModel } from '../viewModels/information.viewModel';

export const useAllInformations = () => {

    const [informations, setInformations] = useState([]);

    useEffect(() => {
        InformationService.fetchAllInformation().then(informationsDto => {
            const informationsModel = informationsDto.map(dto => InformationViewModel.transformInformationDtoToInformationModel(dto));
            setInformations(informationsModel);
        });
    }, []);

    return { informations };
};