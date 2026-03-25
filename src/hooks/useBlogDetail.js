// src/hooks/useBlogDetail.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useBlogDetail(slug) {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['blogDetail', slug],
    queryFn: async () => {
      if (!slug) return null
      const response = await axios.get(`${API_URL}/api/v1/blog-page/blogs/${slug}`)
      return response.data.data
    },
    enabled: !!slug,
  })

  return { data, loading: isLoading, error: error?.message || null }
}
