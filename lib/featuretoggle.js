import { createContext, useContext, useReducer } from 'react';

function featureToggler(state, action) {
  switch (action.type) {
  default:
    return state
  }
}
const FeatureContext = createContext({userAuthentication: 'false'});

export function FeatureProvider({ children}) {
  const [state, dispatch] = useReducer(featureToggler, {userAuthentication: 'false'})

  return (
    <FeatureContext.Provider value={[state, dispatch]}>
      {children}
    </FeatureContext.Provider>
  );
}



export function useFeatures() {
  return useContext(FeatureContext);
}
