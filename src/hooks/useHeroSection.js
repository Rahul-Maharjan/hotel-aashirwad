// src/hooks/useHeroSection.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useHeroSection() {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['heroSection'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/api/v1/homepage/hero-section`)
      return response.data.data
    },
  })

  return { data, loading: isLoading, error: error?.message || null }
}