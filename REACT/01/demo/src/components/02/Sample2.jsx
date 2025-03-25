import React from 'react'
import Card from './Card'
import Button from './Button'
import Liste from './Liste'


export default function Sample2() {
  return (
    <div className="flex items-start gap-4">
      <div>
        <Liste text={"Coffee"} />
        <Liste text={"Tea"} />
        <Liste text={"Beer"} />
      </div>  
      <div>
        <Button text={"Sendar"}/>
      </div>
      <div>
        <Card name={"John Doe"} jobtitle={"Architect & Engineer"} />
      </div>
    </div>    
  )
}