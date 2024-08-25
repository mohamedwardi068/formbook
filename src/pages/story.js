import React from 'react'
import BottomStory from '../components/bottomstory'
import TopStory from '../components/topstory'

function Story() {
  return (
    <div>
        <TopStory 
        id={Product.id}
        title={Product.title}
        image={Product.image}
        desc={Product.description}
        />
        <BottomStory 
        />
    </div>
  )
}

export default Story