import { requestFactory } from "./requesterService"

const baseUrl = 'http://localhost:3000';

export const burgerServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAllBurgerIngredients = async () => {
        const result = await request.get(`${baseUrl}/burgerIngredient`);
        return result;
    };

    return {
        getAllBurgerIngredients,
    }
};