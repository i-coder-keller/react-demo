import React, {useEffect} from "react"
import { Input } from "antd"
const { TextArea } = Input

interface Props {
    fragment: number;
    text: string;
    changeScene: (scene: any) => void
    mergeLine: (scene: any) => void
}
export default (props: Props) => {
  const changeLine = (e: any) => {
    props.changeScene({
      fragment: props.fragment,
      text: props.text,
      position: e.target.selectionStart
    })
  }
  const mergeLine = (e: any) => {
    if (e.key !== "Backspace") return
    if (props.fragment === 0) return
    if (e.target.selectionStart === 0) {
      props.mergeLine({
        fragment: props.fragment,
        text: props.text,
      })
    }

  }
  return (
    <div className="line-container">
      <TextArea autoSize={true} value={props.text} onPressEnter={changeLine} onKeyUp={mergeLine}/>
    </div>
  )
}
