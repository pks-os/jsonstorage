import request from '../shared/lib/request'

function create(dataToSend) {
  return request({
    url:    '/api/items',
    method: 'POST',
    data: dataToSend
  });
}

const ItemService = {
  create
}

export default ItemService;