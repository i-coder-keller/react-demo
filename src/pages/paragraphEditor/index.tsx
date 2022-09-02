import React, {useEffect, useMemo, useState} from 'react'
import "./index.less"
import LineEditor from "./module/lineEditor"
import data from './data'
interface Scenes {
  text: string;
  customMaterials: Array<any>;
  fragment: number;
  key: any;
}
function GenNonDuplicateID(){
  let idStr = Date.now().toString(36)
  idStr += Math.random().toString(36).substring(3)
  return idStr
}
export default () => {
  const [scenes, setScenes] = useState<Array<Scenes>>(data.sort((a, b) => a.fragment - b.fragment).map(s => ({...s, key: GenNonDuplicateID()})))
  const changeScene = (scene: any) => {
    const current = scene.text.substring(0, scene.position)
    const currentScene = {
      ...scene,
      text: current,
      key: GenNonDuplicateID()
    }
    const nextScene: Scenes = {
      text: scene.text.substring(scene.position),
      fragment: currentScene.fragment + 1,
      customMaterials: [],
      key: GenNonDuplicateID()
    }
    const behind = scenes.map(s => {
      if (s.fragment > currentScene.fragment) return {
        ...s,
        fragment: s.fragment + 1,
        key: GenNonDuplicateID()
      }
      if (s.fragment === currentScene.fragment) return currentScene
      return {...s, key: GenNonDuplicateID()}
    })
    behind.push(nextScene)
    setScenes([...behind.sort((a, b) => a.fragment - b.fragment)])
  }
  const mergeLine = (scene: any) => {
    const mergeList = scenes.filter(s => s.fragment!==scene.fragment).map(s => {
      if (s.fragment+1 === scene.fragment) {
        s.text += scene.text
      }
      return s
    })
    setScenes(mergeList)
  }
  return (
    <div className="paragraph-container">
      <div>{ JSON.stringify(scenes) }</div>
      {
        scenes.map(scene => {
          return <LineEditor
            key={scene.fragment + scene.text}
            fragment={scene.fragment}
            text={scene.text}
            changeScene={changeScene}
            mergeLine={mergeLine}
          />
        })
      }
    </div>
  )
}
