import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStoreProps {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const useGameQueryStore = create<GameQueryStoreProps>((set) => ({
  gameQuery: {
    genreId: undefined,
    platformId: undefined,
    sortOrder: '',
    searchText: '',
  },
  setGameQuery(gameQuery) {
    set(() => ({
      gameQuery: { ...gameQuery },
    }));
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('GameQuery Store', useGameQueryStore);
}

export default useGameQueryStore;
