import { create } from "zustand";

type Store = {
  isDark: boolean;
  setTheme: () => void;
};

const useThemeStore = create<Store>()((set) => ({
  isDark: false,
  setTheme: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useThemeStore;
