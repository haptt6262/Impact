import { LIMIT } from '../constants'

export default function PaginationItems(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/search-pagination?activePage=${data.activePage}&textSearch=${data.textSearch}&limit=${LIMIT}`
        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}