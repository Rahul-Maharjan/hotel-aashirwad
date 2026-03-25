// src/hooks/useBlogsList.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useBlogsList(page = 1) {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['blogsList', page],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/api/v1/blog-page/blogs?page=${page}`)
      return response.data
    },
  })

  return { 
    data: data?.data || [], 
    meta: data?.meta || null,
    links: data?.links || null,
    loading: isLoading, 
    error: error?.message || null 
  }
}
