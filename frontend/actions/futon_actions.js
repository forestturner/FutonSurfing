export const FutonConstants = {
  RECEIVE_FUTONS: "RECEIVE_FUTONS",
  RECEIVE_FUTON: "RECEIVE_FUTON",
  REQUEST_FUTONS: "REQUEST_FUTONS",
  REQUEST_FUTON: "REQUEST_FUTON",
  CREATE_FUTON: "CREATE_FUTON",
  REQUEST_OWNER: "REQUEST_OWNER"
};

export const requestFutons = () => ({
  type: FutonConstants.REQUEST_FUTONS
});

export const requestFuton = id => ({
  type: FutonConstants.REQUEST_FUTON,
  id
});

export const receiveFutons = futons => ({
  type: FutonConstants.RECEIVE_FUTONS,
  futons
});

export const receiveFuton = futon => ({
  type: FutonConstants.RECEIVE_FUTON,
  futon
});

export const createFuton = futon => ({
  type: FutonConstants.CREATE_FUTON,
  futon
});
export const reciveOwner = owner => ({
  type: FutonConstants.REQUEST_OWNER,
  owner
})
