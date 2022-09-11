import React, { useEffect, useRef, useState } from "react"
import Wave from "wavesurfer.js"
interface Props {
    config: string;
    file: string;
    refUrl: string;
    setCurrent: (url: string) => void;
    audioPause: () => void;
    currentTime: number;
    duration: number;
}
export default (props: Props) => {
  const { file, config, setCurrent, refUrl, audioPause, currentTime, duration } = props
  const viewRef = useRef()
  const [refAudo, setRefAudio] = useState<any>()
  useEffect(() => {
    if (!viewRef.current) return
    initPeaks()
  }, [viewRef])
  const initPeaks = () => {
    const w = Wave.create({
      container: viewRef.current,
      waveColor: "violet",
      progressColor: "purple"
    })
    fetch(config)
      .then(response => response.json())
      .then(json => {
        const data = json
        w.load(file, data)
      })
    setRefAudio(w)
  }
  useEffect(() => {
    if (!refAudo) return
    setProgres()
  }, [currentTime, duration])
  useEffect(() => {
    if (!refAudo) return
    initEvent()
  }, [refAudo])
  const setProgres = () => {
    refAudo.seekTo(currentTime / duration)
  }
  const initEvent = () => {
    refAudo.on("click", () => {
      console.log("点击")
    })
  }
  return (
    <div className="refContainer">
      <button onClick={() => setCurrent(refUrl)}>播放</button>
      <button onClick={() => audioPause()}>暂停</button>
      <div ref={viewRef}></div>
    </div>
  )
}