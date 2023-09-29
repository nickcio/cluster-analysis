import { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE"
}

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        currentState: "",
    });

    const storeReducer = (action) => {
        const { type, payload } = action;
        console.log(store, payload);
        switch (type) {
            // LIST UPDATE OF ITS NAME
            case GlobalStoreActionType.SET_STATE: {
                return setStore({
                    ...store,
                    currentState: payload,
                });
            }
            default:
                return store;
        }
    }

    store.setState = async function(state) {
        console.log("STATE CHANGED TO: ")
        console.log(state)
        storeReducer({
            type: GlobalStoreActionType.SET_STATE,
            payload: state
        });

    }

    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };