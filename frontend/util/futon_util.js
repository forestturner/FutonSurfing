export const fetchFutons = (filters, success) => {
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


export const createFuton = (futon, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/futons',
    data: futon,
    success
  });
};
