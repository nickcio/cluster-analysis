import { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE",
    SET_ENSEMBLE: "SET_ENSEMBLE"
}

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        currentState: "",
        currentDistricts: "",
        currentEnsemble: ""
    });

    const storeReducer = (action) => {
        const { type, payload } = action;
        console.log(store, payload);
        switch (type) {
            // LIST UPDATE OF ITS NAME
            case GlobalStoreActionType.SET_STATE: {
                return setStore({
                    ...store,
                    currentState: payload.state,
                    currentDistricts: payload.districts,
                    currentEnsemble:payload.currentEnsemble
                });
            }
            case GlobalStoreActionType.SET_ENSEMBLE: {
                return setStore({
                    ...store,
                    currentEnsemble: payload.ensemble
                });
            }
            default:
                return store;
        }
    }

    store.setState = async function(state,districts) {
        console.log("STATE CHANGED TO: ")
        console.log(state)
        const payload_path = store.pathToCurrent;
        payload_path.push({label:state.features[0].properties.NAME, link:"/state"});
        storeReducer({
            type: GlobalStoreActionType.SET_STATE,
            payload: {state:state,districts:districts,currentEnsemble:""}
        });

    }

    store.setEnsemble = async function(ensemble) {
        console.log("ENSEMBLE CHANGED TO: ")
        console.log(ensemble)
        const payload_path = store.pathToCurrent;
        payload_path.push({label:"Ensemble 1", link:"/state/ensemble"});
        storeReducer({
            type: GlobalStoreActionType.SET_ENSEMBLE,
            payload: {ensemble:ensemble}
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