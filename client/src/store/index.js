import { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE",
    SET_ENSEMBLE: "SET_ENSEMBLE",
    SET_CLUSTER: "SET_CLUSTER"
}

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        currentState: "",
        currentDistricts: "",
        currentEnsemble: "",
        currentCluster: ""
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
                    currentEnsemble:payload.ensemble,
                    currentCluster:payload.cluster
                });
            }
            case GlobalStoreActionType.SET_ENSEMBLE: {
                return setStore({
                    ...store,
                    currentEnsemble: payload.ensemble,
                    currentCluster: payload.cluster
                });
            }
            case GlobalStoreActionType.SET_CLUSTER: {
                return setStore({
                    ...store,
                    currentCluster: payload.cluster
                });
            }
            default:
                return store;
        }
    }

    store.setState = async function(state,districts) {
        console.log("STATE CHANGED TO: ")
        console.log(state)
        storeReducer({
            type: GlobalStoreActionType.SET_STATE,
            payload: {state:state,districts:districts,ensemble:"",cluster:""}
        });

    }

    store.setEnsemble = async function(ensemble) {
        console.log("ENSEMBLE CHANGED TO: ")
        console.log(ensemble)
        storeReducer({
            type: GlobalStoreActionType.SET_ENSEMBLE,
            payload: {ensemble:ensemble,cluster:""}
        });

    }

    store.setCluster = async function(cluster) {
        console.log("CLUSTER CHANGED TO: ")
        console.log(cluster)
        storeReducer({
            type: GlobalStoreActionType.SET_CLUSTER,
            payload: {cluster:cluster}
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