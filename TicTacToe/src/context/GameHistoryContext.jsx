import { createContext, useContext } from 'react';

const GHC = createContext();

export const GameHistoryProvider = GHC.Provider;
export const GameHistoryConsumer = GHC.Consumer;
export const useGameHistoryCxt = () => useContext(GHC);

export default GHC;
