import React from 'react'
import Card from './card'

export default function Sample() {
  return (
        <div className="grid grid-cols-2 sp gap-2 m-10">
            <Card name={"Josef"} jobtitle={"Programmierer"} description={"Bald in Rente"} />
            <Card name={"Erika"} jobtitle={"Lehrerin"} description={"In Rente"} />
        </div>
  )
}
