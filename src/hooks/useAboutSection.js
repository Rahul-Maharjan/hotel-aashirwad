import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useAboutSection = () => {
    const API_URL = import.meta.env.VITE_API_URL 

    const { data, isLoading, error } = useQuery({
        queryKey: ['aboutSection'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/v1/homepage/about-section`)
            return response.data.data
        }
    })

    return { data, loading: isLoading, error: error?.message || null }
}

export default useAboutSection;