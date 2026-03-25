// src/hooks/useExperienceDetail.js
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export function useExperienceDetail(slug) {
  const API_URL = import.meta.env.VITE_API_URL

  const { data, isLoading, error } = useQuery({
    queryKey: ['experienceDetail', slug],
    queryFn: async () => {
      if (!slug) return null
      const response = await axios.get(`${API_URL}/api/v1/experience-page/experiences/${slug}`)
      return response.data.data
    },
    enabled: !!slug,
  })

  return { data, loading: isLoading, error: error?.message || null }
}
