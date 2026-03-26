// src/hooks/useContactHero.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useContactHero() {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['contactHero'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/api/v1/contact-page/hero-section`)
      return response.data.data
    },
  })

  return { data, loading: isLoading, error: error?.message || null }
}
