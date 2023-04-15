import { requestFactory } from "./requesterService"

const baseUrl = 'http://localhost:3030';

export const burgerServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAllBurgerIngredients = async () => {
        const result = await request.get(`${baseUrl}/burgerIngredient`);
        return result;
    };

    const getOneBurgerIngredientById = async (burgerIngredientId) => {
        const result = await request.get(`${baseUrl}/burgerIngredient/${burgerIngredientId}`);
        return result;
    };

    const getAllBurgers = async () => {
        const result = await request.get(`${baseUrl}/burger`);
        return result;
    };

    const getBurgerById = async (burgerId) => {
        const result = await request.get(`${baseUrl}/burger/${burgerId}`);
        return result;
    }

    const createBurger = async (burger) => {
        const result = await request.post(`${baseUrl}/burger/create/new`, {burger});
        return result;
    };

    const deleteBurger = async (burgerId) => {
        const result = await request.delete(`${baseUrl}/burger/delete/${burgerId}`);
        return result;
    };

    const getUserBurgers = async (ownerId) => {
        const result = await request.get(`${baseUrl}/burger/user/${ownerId}`);
        return result;
    };

    return {
        getAllBurgerIngredients,
        getOneBurgerIngredientById,
        getAllBurgers,
        getBurgerById,
        createBurger,
        deleteBurger,
        getUserBurgers
    };
};