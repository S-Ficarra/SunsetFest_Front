import { InformationDto } from "../dto/information.dto";
import { BASE_URL } from "../App";

export const InformationService = {

    async fetchAllInformation () {
        const response = await fetch (`${BASE_URL}informations`);
        const data = await response.json();
        return data
            .filter(informations => informations._status === true)
            .map(informations => new InformationDto (
                informations._id,
                informations._user,
                informations._createdAt,
                informations._modifiedAt,
                informations._status,
                informations._type,
                informations._content
            ));
    },

};