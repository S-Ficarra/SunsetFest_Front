import { BandDto } from "../dto/band.dto";
import { BASE_URL } from "../App";

export const bandService = {

    async fetchAllBands() {
      const response = await fetch(`${BASE_URL}bands`);
      const data = await response.json();
      return data.map(band => new BandDto(
        band._id,
        band._name,
        band._country,
        band._text,
        band._socials,
        band._thumbnailImage,
        band._bannerImage,
        band._user,
        band._createdAt,
        band._modifiedAt
      ));
    },

    async fetchBand(bandId) {
        const response = await fetch(`${BASE_URL}bands/${bandId}`);
        const band = await response.json();
        return new BandDto(
          band._id,
          band._name,
          band._country,
          band._text,
          band._socials,
          band._thumbnailImage,
          band._bannerImage,
          band._user,
          band._createdAt,
          band._modifiedAt
        );
      }
  };