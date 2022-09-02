import React, {useRef} from "react"
import { aggregation } from './module/aggregation'
import './index.less'
export default () => {
  const editor: any = useRef()
  const changeEditor = () => {
    console.log(editor.current)
    const nodes = aggregation(editor.current.childNodes).map(elNode => {
      if (Array.isArray(elNode.data)) {
        return elNode.data.map(el => {
          const element = document.createElement(elNode.type) as HTMLImageElement
          element.src = el
          return element
        })
      }
      const element = document.createElement(elNode.type) as HTMLDivElement
      if (typeof elNode.data === "string") {
        element.innerText = elNode.data
      }
      return element
    })
    editor.current.innerHTML = ''
    nodes.flat().forEach(element => {
      editor.current.appendChild(element)
    })
  }
  return (
    <div className="editor-container" ref={editor} contentEditable="true" onInput={changeEditor}>

    </div>
  )
}
