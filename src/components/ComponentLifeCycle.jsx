import React from 'react'


function ComponentLifeCycle() {

  return (
    <div>
        What is LifeCycle in React component?
        Lifecycle stages
        -Mount -when component becomes visible i.e birth
        -Updating - to grow/change
        -UnMount-expired i.e disappear from UI not visible
        Now using useEffect Hook we can manage this lifecycle methods
        i.e suppose we want something to be executed while component is mounting or updating or unmounting
        we can achieve it using lifecycle methods
    </div>
  )
}

export default ComponentLifeCycle