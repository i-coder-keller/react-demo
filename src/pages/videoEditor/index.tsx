import React, {useRef} from "react"
import './index.less'
export default () => {
  const editor: any = useRef()
  const changeEditor = (e: any) => {
    const parse = new DOMParser()
    console.log(editor.current.childNodes)
  }
  return (
    <div className="editor-container" ref={editor} contentEditable="true" onInput={changeEditor}>

    </div>
  )
}
