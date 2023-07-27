import axios from "axios"
import { useEffect, useState } from "react"

export const useCommit = () =>{
    const [commits, setCommits] = useState([])
    const [error, setError] = useState('')

    useEffect(() =>{
        const getCommits = async() =>{
            try {
                const response = await axios.get('http://localhost:3000/commits')
                setCommits(response.data)
            } catch (error) {
                setError(error.message)
            }
        }
        getCommits()
    },[])

    return {commits, error}
}