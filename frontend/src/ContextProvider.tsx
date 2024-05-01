import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";

interface IWord {
  text: string;
  value: number;
}
interface IContext {
  state: {
    loading: boolean;
    analysedWords: IWord[];
  };
  actions: {
    sendFileToAnalyse: (file: Blob) => Promise<void>;
  };
}

const Context = createContext({} as IContext);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [analysedWords, setAnalysedWords] = useState<IWord[]>([]);

  const sendFileToAnalyse = useCallback(async (file: Blob) => {
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/api/file', {
      method: 'post',
      body: formData,
    });
    const words = await response.json();
    setAnalysedWords(words);
    setLoading(false);
  }, [loading, setLoading, setAnalysedWords])

  const context = {
    state: {
      loading,
      analysedWords,
    },
    actions: {
      sendFileToAnalyse,
    },
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
