import { InformationModel } from "../models/information.model";

export const InformationViewModel = {

    transformInformationDtoToInformationModel (informationDto) {
        return new InformationModel (
            informationDto.id,
            informationDto.content._title,
            informationDto.content._text,
            informationDto.content._image
        );
    }
};