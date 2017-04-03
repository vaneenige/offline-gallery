import { createStore } from 'redux';
import { loadState, saveState } from './local';

const ACTIONS = {
  ADD_IMAGE: ({ images, ...state }, { image }) => ({
    images: [...images, {
      id: Math.random().toString(36).substring(2),
      image,
    }],
    ...state,
  }),

  REMOVE_IMAGE: ({ images, ...state }, { image }) => ({
    images: images.filter(i => i !== image),
    ...state,
  }),

  SET_MODAL: ({ modal, ...state }, { toggleState }) => ({
    modal: toggleState,
    ...state,
  }),

  SET_SELECTED: ({ selected, ...state }, { image }) => ({
    selected: image,
    ...state,
  }),

  SET_NETWORK: ({ network, ...state }, { toggleState }) => ({
    network: toggleState,
    ...state,
  }),

  SET_TOAST: ({ toast, ...state }, { toggleState }) => ({
    toast: toggleState,
    ...state,
  }),
};

const INITIAL = {
  images: loadState('images') || [],
  modal: false,
  selected: null,
  network: navigator.onLine,
  toast: '',
};

const store = createStore((state, action) => (
  action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());

store.subscribe(() => {
  saveState({
    images: store.getState().images,
  });
});

export default store;
