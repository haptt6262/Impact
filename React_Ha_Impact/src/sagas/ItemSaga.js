import { takeEvery, put, select } from 'redux-saga/effects'
import * as types from '../constants'
import * as actions from '../actions/index'

import PaginationItems from '../fetchAPIs/paginationItem'
import AddItems from '../fetchAPIs/addItem'
import DeleteItems from '../fetchAPIs/deleteItem'
import UpdateItems from '../fetchAPIs/updateItem'
import SearchPaginationItems from '../fetchAPIs/searchPagination'

function* paginationItem(action) {
    try {
        const res = yield PaginationItems(action.payload)
        yield put(actions.paginationItemSuccess({ listItem: res.listItem, totalPage: res.totalPage, activePage: action.payload, skip: res.skip }))
    } catch (error) {
        yield put(actions.paginationItemFailure(error))
    }
}
function* addItem(action) {
    try {
        let dataStore = yield select((store) => store.item)
        let textSearch = dataStore.textSearch

        let res = yield AddItems({ name: action.payload, textSearch: textSearch })
        yield put(actions.addItemSuccess())

        if (textSearch === '') {
            yield put(actions.paginationItemRequest(res.totalPage))
        } else {
            if (action.payload.name.includes(textSearch)) {
                yield put(actions.searchPaginationItemRequest({ activePage: res.totalPage, textSearch: textSearch }))
            } else {
                yield put(actions.searchPaginationItemSuccess({ activePage: 1, totalPage: 1, listItem: [res.listItem], textSearch: textSearch }))
            }
        }
    } catch (error) {
        yield put(actions.addItemFailure(error))
    }
}
function* deleteItem(action) {
    try {
        let dataStore = yield select((store) => store.item)
        let textSearch = dataStore.textSearch, listItem = dataStore.listItem,
            totalPage = dataStore.totalPage, activePage = dataStore.activePage
        yield DeleteItems(action.payload)
        yield put(actions.deleteItemSuccess())

        if (textSearch === '') {
            if (listItem.length === 1 && totalPage === 1) {
                yield put(actions.paginationItemSuccess({ activePage: 1, totalPage: 1 }))
            }
            if (listItem.length > 1 && totalPage >= 1) {
                yield put(actions.paginationItemRequest(activePage))
            }
            if (listItem.length === 1 && totalPage > 1) {
                activePage = activePage - 1
                yield put(actions.paginationItemRequest(activePage))
            }
        } else {
            if (listItem.length === 1 && totalPage === 1) {
                yield put(actions.searchPaginationItemSuccess({ activePage: 1, totalPage: 1, }))
            }
            if (listItem.length > 1 && totalPage >= 1) {
                yield put(actions.searchPaginationItemRequest({ activePage: activePage, textSearch: textSearch }))
            }
            if (listItem.length === 1 && totalPage > 1) {
                activePage = activePage - 1
                yield put(actions.searchPaginationItemRequest({ activePage: 1, textSearch: textSearch }))
            }
        }
    } catch (error) {
        yield put(actions.deleteItemFailure(error))
    }
}
function* updateItem(action) {
    try {
        let dataStore = yield select((store) => store.item)
        let textSearch = dataStore.textSearch, activePage = dataStore.activePage, totalPage = dataStore.totalPage

        let res = yield UpdateItems(action.payload, { textSearch: textSearch })
        yield put(actions.updateItemSuccess())

        if (textSearch === '') {
            yield put(actions.paginationItemRequest(res.activePage))
        } else {
            if (action.payload.name.includes(textSearch)) {
                yield put(actions.searchPaginationItemRequest({ activePage: res.activePage, totalPage: totalPage, textSearch: textSearch }))
            } else {
                yield put(actions.searchPaginationItemSuccess({ activePage: 1, totalPage: 1, listItem: [res.listItem], textSearch: textSearch }))
            }
        }

    } catch (error) {
        yield put(actions.updateItemFailure(error))
    }
}
function* searchPaginationItem(action) {
    try {
        const res = yield SearchPaginationItems(action.payload)
        yield put(actions.searchPaginationItemSuccess({ listItem: res.listItem, totalPage: res.totalPage, activePage: action.payload.activePage, textSearch: action.payload.textSearch, skip: res.skip }))
    } catch (error) {
        yield put(actions.searchPaginationItemFailure(error))
    }
}
export const ItemSaga = [
    takeEvery(types.PAGINATION_ITEM_REQUEST, paginationItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.SEARCH_PAGINATION_ITEM_REQUEST, searchPaginationItem),
]