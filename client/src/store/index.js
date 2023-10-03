import { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    SET_STATE: "SET_STATE",
<<<<<<< HEAD
    SET_ENSEMBLE: "SET_ENSEMBLE",
    UPDATE_PATH: "UPDATE_PATH"
=======
    SET_ENSEMBLE: "SET_ENSEMBLE"
>>>>>>> parent of 20490f6 (Changed some more)
}

function GlobalStoreContextProvider(props) {
    // THESE ARE ALL THE THINGS OUR DATA STORE WILL MANAGE
    const [store, setStore] = useState({
        currentState: "",
        currentDistricts: "",
<<<<<<< HEAD
        currentEnsemble: "",
        pathToCurrent: [{label:'Home', link:'/'}]
=======
        currentEnsemble: ""
>>>>>>> parent of 20490f6 (Changed some more)
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
<<<<<<< HEAD
                    currentEnsemble:payload.currentEnsemble,
                    pathToCurrent: payload.pathToCurrent
=======
                    currentEnsemble:payload.currentEnsemble
>>>>>>> parent of 20490f6 (Changed some more)
                });
            }
            case GlobalStoreActionType.SET_ENSEMBLE: {
                return setStore({
                    ...store,
<<<<<<< HEAD
                    currentEnsemble: payload.ensemble,
                    pathToCurrent: payload.pathToCurrent
                });
            }
            case GlobalStoreActionType.UPDATE_PATH: {
                return setStore({
                    ...store,
                    pathToCurrent: payload
=======
                    currentEnsemble: payload.ensemble
>>>>>>> parent of 20490f6 (Changed some more)
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
<<<<<<< HEAD
            payload: {state:state,districts:districts,currentEnsemble:"", pathToCurrent:payload_path}
=======
            payload: {state:state,districts:districts,currentEnsemble:""}
>>>>>>> parent of 20490f6 (Changed some more)
        });

    }

    store.setEnsemble = async function(ensemble) {
        console.log("ENSEMBLE CHANGED TO: ")
        console.log(ensemble)
        const payload_path = store.pathToCurrent;
        payload_path.push({label:"Ensemble 1", link:"/state/ensemble"});
        storeReducer({
            type: GlobalStoreActionType.SET_ENSEMBLE,
<<<<<<< HEAD
            payload: {ensemble:ensemble, pathToCurrent:payload_path}
        });

    }

    store.updatePath = async function(pathAddition) {
        const payload = store.pathToCurrent;
        payload.push(pathAddition);
        storeReducer({
            type: GlobalStoreActionType.UPDATE_PATH,
            payload: payload
=======
            payload: {ensemble:ensemble}
>>>>>>> parent of 20490f6 (Changed some more)
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