

import * as types from '../constants'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage: null,
    activePage: 1,
    totalPage: 0,
    textSearch: '',
    skip: 0
}

const ItemReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.PAGINATION_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.PAGINATION_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                listItem: action.payload.listItem,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                skip: action.payload.skip
            }
        case types.PAGINATION_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.ADD_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.ADD_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.ADD_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.DELETE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
            }
        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.SEARCH_PAGINATION_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
                dataFetched: false
            }
        case types.SEARCH_PAGINATION_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                listItem: action.payload.listItem,
                totalPage: action.payload.totalPage,
                activePage: action.payload.activePage,
                textSearch: action.payload.textSearch
            }
        case types.SEARCH_PAGINATION_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetched: false,
                error: true,
                errorMessage: action.payload.errorMessage,
                skip: action.payload.skip
            }
        default:
            return state;
    }
}

export default ItemReducer