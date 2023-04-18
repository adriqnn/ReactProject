import { requestFactory } from "./requesterService";

const baseUrl = 'http://localhost:3030';

export const restaurantServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAllRestaurants = async () => {
        const result = await request.get(`${baseUrl}/restaurant`);
        return result;
    };

    const getRestaurantById = async (restaurantId) => {
        const result = await request.get(`${baseUrl}/restaurant/${restaurantId}`);
        return result;
    };

    const createRestaurant = async (restaurant) => {
        const result = await request.post(`${baseUrl}/restaurant/create/new`, {restaurant});
        return result;
    };

    const updateRestaurant = async (restaurant) => {
        const result = await request.post(`${baseUrl}/restaurant/update/${restaurant.restaurantId}`, {restaurant});
        return result;
    };

    const deleteRestaurant = async (restaurantId) => {
        const result = await request.delete(`${baseUrl}/restaurant/delete/${restaurantId}`);
        return result;
    };

    return {
        getAllRestaurants,
        getRestaurantById,
        createRestaurant,
        updateRestaurant,
        deleteRestaurant
    };
};