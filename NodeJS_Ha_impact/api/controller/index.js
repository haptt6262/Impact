const ItemModel = require('../model/index')

exports.getItem = async (req, res) => {
    try {
        let listItem = await ItemModel.find()
        res.json({ listItem: listItem, message: 'Get Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.addItem = async (req, res) => {
    try {
        let name = req.body.name
        let textSearch = req.body.textSearch
        let listItem = await ItemModel.create(name)
        let limit = req.query.limit
        let totalItems
        if (textSearch === '') {
            totalItems = await ItemModel.countDocuments()
        } else {
            totalItems = await ItemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        }
        let totalPage = Math.ceil(totalItems / limit)
        res.json({ listItem: listItem, totalPage: totalPage, message: 'Add Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.deleteItem = async (req, res) => {
    try {
        let id = req.params.id
        let listItem = await ItemModel.findByIdAndDelete(id)
        res.json({ message: 'Delete Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.updateItem = async (req, res) => {
    try {
        let id = req.params.id
        let name = req.body.name
        let textSearch = req.query.textSearch
        let count
        let limit = parseInt(req.query.limit)
        let listItem = await ItemModel.findByIdAndUpdate(id, { name }, { new: true })
        let listA = await ItemModel.find({ name: { $regex: textSearch, $options: 'i' } })
        // console.log(listA, limit);
        for (let i = 0; i < listA.length; i++) {
            if (listA[i]._id.equals(id)) {
                count = i
            }
        }
        let activePage = Math.ceil((count + 1) / limit)
        console.log(activePage);
        res.json({ activePage: activePage, listItem: listItem, message: 'Update Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.paginationItem = async (req, res) => {
    try {
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let totalItems = await ItemModel.countDocuments()
        let totalPage = Math.ceil(totalItems / limit)
        let skip = (activePage - 1) * limit
        let listItem = await ItemModel.find().skip(skip).limit(limit)
        if (totalPage === 0) totalPage = 1
        res.json({ listItem: listItem, totalPage: totalPage, skip: skip, message: 'Pagination Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.searchPaginationItem = async (req, res) => {
    try {
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let textSearch = req.query.textSearch
        let totalItems = await ItemModel.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        let totalPage = Math.ceil(totalItems / limit)
        let skip = (activePage - 1) * limit
        let listItem = await ItemModel.find({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.json({ listItem: listItem, totalPage: totalPage, skip: skip, message: 'Search Pagination Item Successfully' })
    } catch (error) {
        res.send({ error: error.message })
    }
}