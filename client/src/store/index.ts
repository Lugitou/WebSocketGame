import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface State {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socket: any;
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    socket: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
