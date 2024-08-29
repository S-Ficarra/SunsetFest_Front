# ----- THIS PROJECT IS PART OF A SCHOOL EXAM -----

This repository is a front-end that display all informations for a music festival. It have several components to display bands, publications (as news, informations, faqs) and a map for facilities. Navbar is separated to 2 components, to have one on desktop and one on mobile with a hamburger menu. Footer allow visitors to go to legal pages (cookies etc) and to send email.

This repository is the front-end of this project : https://github.com/S-Ficarra/SunsetFest

The final result can be seen at this URL : https://sunsetfest.online/

The project have been realized using :

- React 18.3.1
- React Router Dom 6.24.0
- React dotenv 0.1.3
- React-google-maps 1.1.0 
- Slick-carousel 1.8.1

## Installation 

1 - Clone the repository from github

```bash
git clone https://github.com/S-Ficarra/SunsetFest_Front.git
```

2 - Install the dependancies

```bash
npm install
```

3 - Create a .env file in the project root, following this structure : 

```javascript
REACT_APP_GOOGLE_API_KEY: //your_google_api_key
REACT_APP_MAP_ID: //your_google_api_map_id
```

4 - Configure the BASE_URL, that'll be the core of the URL you'll use to fetch from your API. `BASE_URL` is stocked in the file `./src/app.js` and can be changed directly from here : 

```javascript
export const BASE_URL = 'http://localhost:3000/'
```

## Structure

This project have been conceived with a layered architecture:

Datas will follow this path : API -> Service -> Controller -> Hook -> Component

`./src/__tests__` Contains all test files.

`./src/assets` Stores images and logos used across the website.

`./src/components` Reusable UI components.

`./src/controllers` Intermediaries between components and services.

`./src/dto` Data Transfer Objects (DTOs) for API communication.

`./src/hooks` Custom hooks, mainly for data fetching.

`./src/mappers` Mappers to convert DTOs into model objects.

`./src/models` Model objects for use within components.

`./src/services` Services that handle API communication.

`./src/views` Page components that combine smaller components.

## Hooks

- Hooks are use to call the controller and fetch the data once the component have been mounted, please see exemple for allBands :

```javascript
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
```

Then it can be called directly in the components like this :

```javascript
    const { bands } = useAllBands();
``` 

Once the components is mounted, it will fill it with the data fetched

## Controllers

Controllers are used to be the interface between the component (the hook) and the service, they call the service and transform the dto received as the useable obect throught the mappers. See below an exemple of the controllers : 

```javascript
import { bandService } from "../services/band.service";
import { BandMapper } from "../mappers/band.mapper";

export const GetAllBands = async () => {
    const bandDtoArray = await bandService.fetchAllBands();
    const bandModels = bandDtoArray.map(dto => BandMapper.transformBandDtoToBandModel(dto))
    return bandModels;
};
```

Controllers files contains all controllers needed for a particular object (bands in this exemple).


## Services

Services are classes with methods that fetch the data directly from the API and create a new DTO, see below exemple of the services : 

```javascript
import { BandDto } from "../dto/band.dto";
import { BASE_URL } from "../App";

export const bandService = {

    async fetchAllBands () {
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
}
```

## Views

The views are small components used to gather all components together and display them as wanted as a page, see exemple below with information page : 

```javascript
function InformationPage () {

    return(
        <>
        <NavBar />
        <div className="TitleContainer">
            <h1>INFORMATIONS</h1>
        </div>
        <Informations />
        <div className="SecondTitleContainer">
            <h1>FAQS</h1>
        </div>
        <Faqs />
        <div className="Separator">
            <img src={SkullLogo} alt="Notre logo" />
        </div>
        <TicketInfoPanel />
        <Footer />
        </>
    );
};
```

## Tests

Tests are designed to test controllers, services and components. As code is similar in all thoses objects, one of each have been tested.














