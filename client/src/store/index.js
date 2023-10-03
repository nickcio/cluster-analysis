import { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE",
    SET_ENSEMBLE: "SET_ENSEMBLE",
    SET_CLUSTER: "SET_CLUSTER",
    SET_DISTANCE: "SET_DISTANCE"
}

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        currentState: "",
        currentDistricts: "",
        currentEnsemble: "",
        currentCluster: "",
        currentDistance: ""
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
                    currentCluster:payload.cluster,
                    currentDistance:payload.distance
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
            case GlobalStoreActionType.SET_DISTANCE: {
                return setStore({
                    ...store,
                    currentDistance: payload.distance
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
            payload: {state:state,districts:districts,ensemble:"",cluster:"",distance:""}
        });

    }

    store.setEnsemble = async function(ensemble) {
        console.log("ENSEMBLE CHANGED TO: ")
        console.log(ensemble)
        storeReducer({
            type: GlobalStoreActionType.SET_ENSEMBLE,
            payload: {ensemble:ensemble,cluster:"",distance:""}
        });
    }

    store.setDistance = async function(distance) {
        console.log("Distance CHANGED TO: ")
        console.log(distance)
        storeReducer({
            type: GlobalStoreActionType.SET_DISTANCE,
            payload: {distance:distance}
        });

    }

    store.setCluster = async function(cluster) {
        console.log("CLUSTER CHANGED TO: ")
        console.log(cluster)
        storeReducer({
            type: GlobalStoreActionType.SET_CLUSTER,
            payload: {cluster:cluster,distance:""}
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