import React from 'react'
import { LucideEye } from 'lucide-react'


const TinderCardButtons = () => {
  return (
    <div className="flex">                  
       <button className="absolute btn btn-circle btn-outline btn-secondary bg-clearGray  p-2"><LucideEye /> </button>
       <button className="absolute btn btn-circle btn-outline btn-secondary bg-clearGray  p-2 "><LucideEye /> </button>
       <button className="absolute btn btn-circle btn-outline btn-error bg-clearGray p-2 "><LucideEye /> </button>
    </div>
  )
}

export default TinderCardButtons