
import { useCommit } from "../hooks/useCommit"
import { Commit } from "./Commit"
import { ErrorCard } from "./ErrorCard"

export const CommitsList = () =>{
  const {commits, error} = useCommit()

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