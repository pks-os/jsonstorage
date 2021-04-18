import request from '../shared/lib/request'

function create(dataToSend) {
  return request({
    url:    'https://api.jsonstorage.net/v1/json',
    method: 'POST',
    data: dataToSend
  });
}

const ItemService = {
  create
}

export default ItemService;