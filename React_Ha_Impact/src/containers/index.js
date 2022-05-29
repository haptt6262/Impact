import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import ItemComponent from '../components/index'

class ItemContainer extends Component {
    componentDidMount() {
        this.props.paginationItem(1)
    }
    render() {
        return (
            <ItemComponent {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.item.listItem,
        totalPage: state.item.totalPage,
        activePage: state.item.activePage,
        textSearch: state.item.textSearch,
        skip: state.item.skip
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        paginationItem: (data) => {
            dispatch(actions.paginationItemRequest(data))
        },
        addItem: (data) => {
            dispatch(actions.addItemRequest(data))
        },
        deleteItem: (data) => {
            dispatch(actions.deleteItemRequest(data))
        },
        updateItem: (data) => {
            dispatch(actions.updateItemRequest(data))
        },
        searchPaginationItem: (data) => {
            dispatch(actions.searchPaginationItemRequest(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
