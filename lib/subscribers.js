import { createContext, useContext, useReducer } from 'react';

function subscriberReducer(state, action) {
  switch (action.type) {
    case 'signUp':
      state = {subscribed: 'new'}
      return state
    case 'subscribed':
      state = {subscribed: 'subscribed'}
      return state
  default:
    return state
  }
}

const SubscriberContext = createContext({subscribed: 'false'});

export function SubscriberProvider({ children}) {
  const [state, dispatch] = useReducer(subscriberReducer, {subscribed: 'false'});

  return (
    <SubscriberContext.Provider value={[state, dispatch]}>
      {children}
    </SubscriberContext.Provider>
  );
}


export function useSubscriber() {
  return useContext(SubscriberContext);
}
