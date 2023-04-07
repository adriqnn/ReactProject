import { useState } from "react"

export const useLocalStorageSetter = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSeriazlied = localStorage.getItem(key);
        if(persistedStateSeriazlied){
            const persistedState = JSON.parse(persistedStateSeriazlied);
            return persistedState;
        }
        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [state, setLocalStorageState];
};