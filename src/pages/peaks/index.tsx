import React, { useEffect, useRef, useState } from "react"
import "./index.less"
import data from "./config.json"
import De from "./default.mp3"
import Refs from "./refs"
export default () => {
  const [current, setCurrent] = useState<string>("")
  const [time, setTime] = useState<NodeJS.Timer | null>()
  const audioRef = useRef<HTMLAudioElement>()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  useEffect(() => { 
    if (!current) return
    audioRef.current.play()
  }, [current])
  const playing = () => {
    setTime(setInterval(() => {
      setCurrentTime(audioRef.current.currentTime)
    }))
  }
  const ended = () => {
    clearInterval(time)
  }
  const audioPause = () => {
    audioRef.current.pause()
  }
  return (
    <div className="container">
      {
        data.data.list.map(r => {
          return <Refs
            config={r.waveformConfig}
            file={De}
            key={r.url}
            refUrl={r.url}
            setCurrent={setCurrent}
            audioPause={audioPause}
            duration={duration}
            currentTime={currentTime}
          />
        })
      }
      <audio
        src={current}
        ref={audioRef}
        onPlay={playing}
        onPause={ended}
        onEnded={ended}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      ></audio>
    </div>
  )
}