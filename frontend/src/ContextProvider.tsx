import {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";

interface IContext {
  state: {
    loading: boolean;
  };
  actions: {};
}

const Context = createContext({} as IContext);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, _setLoading] = useState(false);

  const context = {
    state: {
      loading,
    },
    actions: {}
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export const useContextState = () => {
  const { state } = useContext(Context);
  return state;
};

export const useContextActions = () => {
  const { actions } = useContext(Context);
  return actions;
};

export default ContextProvider;
