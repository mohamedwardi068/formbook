import React from 'react'
import BottomStory from '../components/bottomstory'
import TopStory from '../components/topstory'
import { useApi } from '../context/apicontext'

function Story() {
  const {books}=useApi()
  return (
    <div>
        <TopStory 
        id={books?.id||""}
        title={books?.title||""}
        image={books?.image||""}
        desc={books?.description||""}
        />
        <BottomStory 
        />
    </div>
  )
}

export default Story