import { useEffect, useState } from "react"
import axios from 'axios'
import { Commit } from "./Commit"
import { ErrorCard } from "./ErrorCard"

export const CommitsList = () =>{
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

    if(error !== ''){
      return <ErrorCard />
    }

    return(
      <div>
        <h1 className="flex justify-center text-4xl text-[#212529] font-bold pt-5 pb-5">Commits</h1>
          <div className="md:p-10">
            {commits.map((commit) =>{
                return(
                  <Commit commit={commit} key={commit.sha} />
                )
            })}
        </div>
      </div>
    )
}