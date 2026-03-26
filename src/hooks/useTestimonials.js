// src/hooks/useTestimonials.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useTestimonials() {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/api/v1/testimonials`)
      return response.data.data
    },
  })

  return { data, loading: isLoading, error: error?.message || null }
}
