import React from 'react'

const Friends = () => {
   const bs = ["sara", "peru", "msp"];
    return (
      <div>
        {bs.map((frnd, index) => (
          <p key={index}>{frnd}</p>
        ))}
      </div>
    )
}

export default Friends
