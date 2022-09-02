import React, {useRef} from "react"
import "./index.less"
import { aggregation } from "./module/aggregation"
export default () => {
  const editor: any = useRef()
  const pasteEditor = (event: any) => {
    window.requestAnimationFrame(() => {
      if (editor.current.outerHTML.includes("Mso")) {
        alert("请上传word文件")
        editor.current.innerHTML = ""
        return
      }
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
      editor.current.innerHTML = ""
      nodes.flat().forEach(element => {
        if (!element.outerHTML.includes("img") && element.innerText.replace("\n+","") === "") return
        editor.current.appendChild(element)
      })
    })
  }
  return (
    <div className="editor-container" ref={editor} contentEditable="true" onPaste={pasteEditor}>

    </div>
  )
}
