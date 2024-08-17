import React, { useState } from "react";
import { StageIcon, ToiletIcon, CampingIcon, VipIcon, FoodIcon, ShopIcon, BarIcon } from "../../../assets/MapIcons/iconsModule";


function Filters ({ filters, onFilterChange }) {

    const [expended, setExpended] = useState(true)


    return (
        <div className="FiltersContainer">
            {expended && (
            <>
                <label>
                    <input type="checkbox" checked={filters.stages} onChange={() => onFilterChange('stages')} />
                    Scènes
                    <div className="IconContainer" style={{ backgroundColor: '#e2557f' }}>
                        <img src={StageIcon} alt="Scènes" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.toilets} onChange={() => onFilterChange('toilets')} />
                    Toilettes
                    <div className="IconContainer" style={{ backgroundColor: '#0013FF' }}>
                        <img src={ToiletIcon} alt="Toilettes" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.campings} onChange={() => onFilterChange('campings')} />
                    Campings
                    <div className="IconContainer" style={{ backgroundColor: 'green' }}>
                        <img src={CampingIcon} alt="Campings" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.vips} onChange={() => onFilterChange('vips')} />
                    VIP
                    <div className="IconContainer" style={{ backgroundColor: 'black' }}>
                        <img src={VipIcon} alt="VIP" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.bars} onChange={() => onFilterChange('bars')} />
                    Bars
                    <div className="IconContainer" style={{ backgroundColor: '#ffb703' }}>
                        <img src={BarIcon} alt="Bars" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.restaurants} onChange={() => onFilterChange('restaurants')} />
                    Restaurants
                    <div className="IconContainer" style={{ backgroundColor: '#9a031e' }}>
                        <img src={FoodIcon} alt="Restaurants" />
                    </div>
                </label>
                <label>
                    <input type="checkbox" checked={filters.merchandisings} onChange={() => onFilterChange('merchandisings')} />
                    Boutiques
                    <div className="IconContainer" style={{ backgroundColor: 'purple' }}>
                        <img src={ShopIcon} alt="Marchandises" />
                    </div>
                </label>
            </>
        )}
            <button className="FiltersButton" onClick={() => {setExpended(!expended)}}>{expended ? `Fermer les filtres` : `Voir les filtres`}</button>
        </div>
    );
    
};
export default Filters;
