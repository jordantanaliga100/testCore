import api from '../axios'

export const fetchData = async (id: string) => {
    const res = await api.get(`/todos/${id}`)
    return res.data
}
