import { useEffect, useState } from "react"
import axios from 'axios'
import { Commit } from "./Commit"

export const CommitsList = () =>{
    const [commits, setCommits] = useState([])

    useEffect(() =>{
        const getCommits = async() =>{
            try {
                const response = await axios.get('http://localhost:3000/commits')
                setCommits(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getCommits()
    },[])


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