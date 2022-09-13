import Wave from "wavesurfer.js"
import React, {useEffect, useRef} from "react"
interface Props {
    media:string;
    env: string;
    url: string;
  update: (json: number[], media: string, env: string) => void;
}
export default (props: Props) => {
  const { env, media, url, update } = props
  const waveRef = useRef<HTMLDivElement>()
  useEffect(() => {
    console.log(11)
    init()
  }, [])
  const init = () => {
    const w:any = Wave.create({container: waveRef.current})
    w.load(url)
    w.on("ready", () => {
      const data = w.backend.getPeaks(w.backend.mergedPeaks.length, 0, w.backend.mergedPeaks.length)
      update(data, media, env)
    })
  }

  return (
    <div ref={waveRef}></div>
  )
}
