import * as types from '../constants'

export function paginationItemRequest(payload) {
    return {
        type: types.PAGINATION_ITEM_REQUEST,
        payload
    }
}
export function paginationItemSuccess(payload) {
    return {
        type: types.PAGINATION_ITEM_SUCCESS,
        payload
    }
}
export function paginationItemFailure(payload) {
    return {
        type: types.PAGINATION_ITEM_FAILURE,
        payload
    }
}

export function addItemRequest(payload) {
    return {
        type: types.ADD_ITEM_REQUEST,
        payload
    }
}
export function addItemSuccess(payload) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        payload
    }
}
export function addItemFailure(payload) {
    return {
        type: types.ADD_ITEM_FAILURE,
        payload
    }
}

export function deleteItemRequest(payload) {
    return {
        type: types.DELETE_ITEM_REQUEST,
        payload
    }
}
export function deleteItemSuccess(payload) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        payload
    }
}
export function deleteItemFailure(payload) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        payload
    }
}

export function updateItemRequest(payload) {
    return {
        type: types.UPDATE_ITEM_REQUEST,
        payload
    }
}
export function updateItemSuccess(payload) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        payload
    }
}
export function updateItemFailure(payload) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        payload
    }
}

export function searchPaginationItemRequest(payload) {
    return {
        type: types.SEARCH_PAGINATION_ITEM_REQUEST,
        payload
    }
}
export function searchPaginationItemSuccess(payload) {
    return {
        type: types.SEARCH_PAGINATION_ITEM_SUCCESS,
        payload
    }
}
export function searchPaginationItemFailure(payload) {
    return {
        type: types.SEARCH_PAGINATION_ITEM_FAILURE,
        payload
    }
}