import { BandModel } from '../models/band.model';

export const BandMapper = {
  transformBandDtoToBandModel(bandDto) {
    return new BandModel(
        bandDto.id,
        bandDto.name,
        bandDto.country,
        bandDto.text,
        bandDto.thumbnailImage,
        bandDto.bannerImage,
        bandDto.socials._facebook,
        bandDto.socials._instagram,
        bandDto.socials._twitter,
        bandDto.socials._youtube,
        bandDto.socials._spotify,
        bandDto.socials._website,
        bandDto.socials._spotifyIntegrationLink,
        bandDto.socials._youtubeIntegrationLink
    );
  }
};