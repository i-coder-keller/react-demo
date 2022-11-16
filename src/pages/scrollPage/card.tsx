import React from "react"
export interface IProps {
    source: string
    description: string
    height: number
    width: number
}

export default ({source, description}:IProps) => {
  return (
    <div className="w-full h-auto">
      <img src={source} alt="source" className="w-full h-auto"/>
      <div className="w-full mx-2 h-[20px] overflow-ellipsis font-normal">{description}</div>
    </div>
  )
}
