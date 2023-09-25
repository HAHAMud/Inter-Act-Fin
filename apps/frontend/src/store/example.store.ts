import { create } from 'zustand';
import { combine, devtools, NamedSet } from 'zustand/middleware';

interface BearState {
  bear: any | null;
}

interface BearAction {
  actions: {
    setBear: (bear: any) => void;
    removeBear: () => void;
  };
}

const bearState: BearState = {
  bear: null,
};

const bearAction = (set: NamedSet<BearState>, get: () => BearState): BearAction => ({
  actions: {
    setBear: (bear) => set({ bear }),
    removeBear: () => set({ bear: null }),
  },
});

const store = combine<BearState, BearAction>({ ...bearState }, bearAction);
export const useStore = create(devtools(store, { name: 'Inter-Act-Fin' }));
export const useStoreActions = () => useStore((state) => state.actions);
