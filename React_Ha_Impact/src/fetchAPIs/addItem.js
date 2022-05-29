import { LIMIT } from '../constants'

export default function PaginationItems(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items?limit=${LIMIT}`
        // const url = "http://localhost:3001/items"
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}