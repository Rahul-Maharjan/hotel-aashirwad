// src/hooks/useWhyChooseUs.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useWhyChooseUs() {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['whyChooseUs'],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/api/v1/aboutpage/why-choose-us`)
      return response.data.data
    },
  })

  return { data, loading: isLoading, error: error?.message || null }
}
