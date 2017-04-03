export const addImage = image => ({
  type: 'ADD_IMAGE',
  image,
});

export const removeImage = image => ({
  type: 'REMOVE_IMAGE',
  image,
});

export const setModal = toggleState => ({
  type: 'SET_MODAL',
  toggleState,
});

export const setSelected = image => ({
  type: 'SET_SELECTED',
  image,
});

export const setNetwork = toggleState => ({
  type: 'SET_NETWORK',
  toggleState,
});

export const setToast = toggleState => ({
  type: 'SET_TOAST',
  toggleState,
});
