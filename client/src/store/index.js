import { createContext, useContext, useState } from "react";

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
  SET_STATE: "SET_STATE",
  SET_ENSEMBLE: "SET_ENSEMBLE",
  SET_CLUSTER: "SET_CLUSTER",
  SET_DISTANCE: "SET_DISTANCE",
  SET_AVERAGE_PLAN: "SET_AVERAGE_PLAN",
};

function GlobalStoreContextProvider(props) {
  const [store, setStore] = useState({
    currentState: "",
    currentDistricts: "",
    currentEnsemble: "",
    currentCluster: "",
    currentOptimalMatrix: "",
    currentHammingMatrix: "",
    averagePlan: "",
  });

  const storeReducer = (action) => {
    const { type, payload } = action;
    switch (type) {
      case GlobalStoreActionType.SET_STATE: {
        return setStore({
          ...store,
          currentState: payload.state,
          currentDistricts: payload.districts,
          currentEnsemble: payload.ensemble,
          currentCluster: payload.cluster,
          currentDistance: payload.distance,
        });
      }
      case GlobalStoreActionType.SET_ENSEMBLE: {
        return setStore({
          ...store,
          currentEnsemble: payload.ensemble,
          currentCluster: payload.cluster,
        });
      }
      case GlobalStoreActionType.SET_CLUSTER: {
        return setStore({
          ...store,
          currentCluster: payload.cluster,
        });
      }
      case GlobalStoreActionType.SET_DISTANCE: {
        return setStore({
          ...store,
          currentOptimalMatrix: payload.optimalMatrix,
          currentHammingMatrix: payload.hammingMatrix,
        });
      }
      case GlobalStoreActionType.SET_AVERAGE_PLAN: {
        return setStore({
          ...store,
          averagePlan: payload
        });
      }
      default:
        return store;
    }
  };

  store.setState = async function (state, districts) {
    console.log("STATE CHANGED TO: ");
    console.log(state);
    storeReducer({
      type: GlobalStoreActionType.SET_STATE,
      payload: {
        state: state,
        districts: districts,
        ensemble: "",
        cluster: "",
        distance: "",
      },
    });
  };

  store.setEnsemble = async function (ensemble) {
    console.log("ENSEMBLE CHANGED TO: ");
    console.log(ensemble);
    storeReducer({
      type: GlobalStoreActionType.SET_ENSEMBLE,
      payload: { ensemble: ensemble, cluster: "", distance: "" },
    });
  };

  store.setDistance = async function (optimal_transport_distance_matrix, hamming_distance_matrix) {
    storeReducer({
      type: GlobalStoreActionType.SET_DISTANCE,
      payload: {optimalMatrix: optimal_transport_distance_matrix, hammingMatrix: hamming_distance_matrix},
    });
  };

  store.setCluster = async function (cluster) {
    console.log("CLUSTER CHANGED TO: ");
    console.log(cluster);
    storeReducer({
      type: GlobalStoreActionType.SET_CLUSTER,
      payload: { cluster: cluster, distance: "" },
    });
  };

  store.updateAveragePlan = async function (averagePlan) {
    storeReducer({
      type: GlobalStoreActionType.SET_AVERAGE_PLAN,
      payload: averagePlan,
    });
  };

  return (
    <GlobalStoreContext.Provider
      value={{
        store,
      }}
    >
      {props.children}
    </GlobalStoreContext.Provider>
  );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
