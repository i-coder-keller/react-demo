import React from "react"
export interface IProps {
    source: string
    description: string
    height: number
    width: number
}

export default ({source, description, width, height}:IProps) => {
  return (
    <div style={{width: `${width}px`, height: `${height}px`}} className="bg-current">
      <img src={source} alt="source" className="w-full h-full"/>
      <div className="w-full mx-2 h-[20px] overflow-ellipsis font-normal">{description}</div>
    </div>
  )
}
