import { LIMIT } from '../constants'

export default function PaginationItems(data, textSearch) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/items/${data.id}?textSearch=${textSearch.textSearch}&limit=${LIMIT}`
        fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: data.name })
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}