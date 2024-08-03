import React, { useState } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import './festivalMap.css';
import Filters from "../filters/filters";
import Markers from "../markers/markers";
import { StageIcon, ToiletIcon, CampingIcon, VipIcon, FoodIcon, ShopIcon, BarIcon } from "../../../assets/MapIcons/iconsModule";
import { useAllStages } from "../../../hooks/Facilities/useAllStages";
import { useAllToilets } from "../../../hooks/Facilities/useAllToilets";
import { useAllCampings } from "../../../hooks/Facilities/useAllCampings";
import { useAllVips } from "../../../hooks/Facilities/useAllVips";
import { useAllBars } from "../../../hooks/Facilities/useAllBars";
import { useAllRestaurants } from "../../../hooks/Facilities/useAllRestaurants";
import { useAllMerchandisings } from "../../../hooks/Facilities/useAllMerchandisings";

function FestivalMap() {

    const { allStages } = useAllStages();
    const { allToilets } = useAllToilets();
    const { allCampings } = useAllCampings();
    const { allVips } = useAllVips();
    const { allBars } = useAllBars();
    const { allRestaurants } = useAllRestaurants();
    const { allMerchandisings } = useAllMerchandisings();

    const [filters, setFilters] = useState({
        stages: true,
        toilets: true,
        campings: true,
        vips: true,
        bars: true,
        restaurants: true,
        merchandisings: true,
    });



    const handleFilterChange = (category) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: !prevFilters[category],
        }));
    };


    return (
        <div className="MapContainer">
            <div id="map">
                <div>
                    <Filters filters={filters} onFilterChange={handleFilterChange} />
                </div>
                <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
                    <Map
                        defaultZoom={15}
                        mapId={process.env.REACT_APP_MAP_ID}
                        defaultCenter={{ lat: 43.727454016718504, lng: 3.7493905082638257}}
                    >
                        {filters.stages && <Markers dataArray={allStages} backgroundColor={'#e2557f'} Img={StageIcon}/>}
                        {filters.toilets && <Markers dataArray={allToilets} backgroundColor={'#0013FF'} Img={ToiletIcon}/>}
                        {filters.campings && <Markers dataArray={allCampings} backgroundColor={'green'} Img={CampingIcon}/>}
                        {filters.vips && <Markers dataArray={allVips} backgroundColor={'black'} Img={VipIcon}/>}
                        {filters.bars && <Markers dataArray={allBars} backgroundColor={'#ffb703'} Img={BarIcon}/>}
                        {filters.restaurants && <Markers dataArray={allRestaurants} backgroundColor={'#9a031e'} Img={FoodIcon}/>}
                        {filters.merchandisings && <Markers dataArray={allMerchandisings} backgroundColor={'purple'} Img={ShopIcon}/>}
                    </Map>
                </APIProvider>
            </div>
        </div>
    );
}

export default FestivalMap;
