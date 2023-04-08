import { requestFactory } from "./requesterService";

const baseUrl = 'http://localhost:3000';

export const pizzaServiceFactory = (token) => {
    const request = requestFactory(token);
    
    const getAllPizzaIngredients = async () => {
        const result = await request.get(`${baseUrl}/pizzaIngredient`);
        return result;
    };

    const getOnePizzaIngredientById = async (pizzaIngredientId) => {
        const result = await request.get(`${baseUrl}/pizzaIngredient/${pizzaIngredientId}`);
        return result;
    };

    const getAllPizzas = async () => {
        const result = await request.get(`${baseUrl}/pizza`);
        return result;
    };

    const getPizzaById = async (pizzaId) => {
        const result = await request.get(`${baseUrl}/pizza/${pizzaId}`);
        return result;
    };

    const createPizza = async (pizza) => {
        const result = await request.post(`${baseUrl}/pizza/create/new`, {pizza});
        return result;
    };

    const deletePizza = async (pizzaId) => {
        const result = await request.delete(`${baseUrl}/pizza/delete/${pizzaId}`);
        return result;
    };

    const getUserPizzas = async (ownerId) => {
        const result = await request.get(`${baseUrl}/pizza/user/${ownerId}`);
        return result;
    };

    return {
        getAllPizzaIngredients,
        getOnePizzaIngredientById,
        getAllPizzas,
        getPizzaById,
        createPizza,
        deletePizza,
        getUserPizzas
    };
};