import { requestFactory } from "./requesterService";

const baseUrl = 'http://localhost:3000';

export const pizzaServiceFactory = (token) => {
    const request = requestFactory(token);
    
    const getAllPizzaIngredients = async () => {
        const result = await request.get(`${baseUrl}/pizzaIngredient`);
        return result;
    };

    return {
        getAllPizzaIngredients,
    };
};