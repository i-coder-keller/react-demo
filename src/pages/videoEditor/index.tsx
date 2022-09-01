import React from "react"
import './index.less'
export default () => {
  const changeEditor = (e: any) => {
    console.log(e.target)
  }
  return (
    <div className="editor-container" contentEditable="true" onInput={changeEditor}>

    </div>
  )
}
