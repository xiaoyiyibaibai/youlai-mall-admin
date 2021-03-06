import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items',
    method: 'get',
    params: queryParams
  })
}

export function listByDictCode(dictCode) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items',
    method: 'get',
    params: {'dictCode': dictCode, queryMode: 'list'}
  })
}


export function detail(id) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items/'+ids,
    method: 'delete',
  })
}

export function patch(id, data) {
  return request({
    url: '/youlai-admin/api.admin/v1/dict_items/' + id,
    method: 'patch',
    data: data
  })
}
