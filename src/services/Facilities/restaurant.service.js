import { BASE_URL } from "../../App";
import { RestaurantDto } from "../../dto/Facilities/restaurant.dto";


export const RestaurantService = {

    async fetchAllRestaurant (authHeader) {
        const response = await fetch (`${BASE_URL}restaurants`, {
            headers: {'Authorization': authHeader}});
        const data = await response.json();
        if (response.status === 200) {
            return data.map(restaurant => new RestaurantDto (
                restaurant._id,
                restaurant._name,
                restaurant._longitude,
                restaurant._latitude,
                restaurant._type,
                restaurant._foodType,
                restaurant._openingTimes,
            ))
        } else {
            return {response, data};
        };
    },

};