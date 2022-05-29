import React, { Component } from 'react'

export default class ItemComponent extends Component {
    state = {
        name: '',
        textSearch: '',
    }
  
    render() {
        console.log(this.props.activePage,'vssssss', this.props.totalPage)
        let listButton = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            listButton.push(i)
        }
        
        let listData = []
        if (this.props.items) {
            listData = this.props.items.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{index + this.props.skip + 1}</th>
                        <th>{item.name}</th>
                        <th>
                            <button onClick={() => { this.props.deleteItem({ id: item._id }) }}>DELETE</button>
                        </th>
                        <th>
                            <button onClick={() => { this.setState({ name: item.name, id: item._id }) }}>SELECT</button>
                        </th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <div>
                    <input value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    <button onClick={() => { this.props.addItem({ name: this.state.name }) }}>ADD</button>
                    <button onClick={() => { this.props.updateItem({ name: this.state.name, id: this.state.id }) }}>UPDATE</button>
                    <button style={{ display: this.props.textSearch ? "inline-block" : "none" }} onClick={() => { this.props.paginationItem(1) }}>GET</button>
                </div>
                <div>
                    <input onChange={(e) => { this.setState({ textSearch: e.target.value }) }} />
                    <button
                        onClick={() => { this.props.searchPaginationItem({ textSearch: this.state.textSearch, activePage: 1 }) }}>SEARCH</button>

                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        listButton.map((item, index) => {
                            return (
                                <button key={index} style={{ background: this.props.activePage === item ? "red" : null }}
                                    onClick={() => {
                                        if (this.props.activePage !== item) {
                                            if (this.props.textSearch) this.props.searchPaginationItem({ textSearch: this.props.textSearch, activePage: item })
                                            else { this.props.paginationItem(item) }
                                        }
                                    }}>{item}</button>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
