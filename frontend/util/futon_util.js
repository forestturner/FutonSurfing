export const fetchFutons = ( filters, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/futons',
    data: filters,
    success
  });
};

export const fetchFuton = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/futons/${id}`,
    success
  });
};


export const fetchOwner = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    success
  });
};


export const createFuton = (futon, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/futons',
    data: futon,
    success
  });
};

export const updateFuton = (id, futon, success) => {
  $.ajax({
    url: `api/futons/${id}`,
    method: "PATCH",
    data: {futon:futon},
    success,
    error: (error)=> (console.log(error) )
  });
};
