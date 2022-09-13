import React, {useState} from "react"
import WaveRef from "./wave"
import axios from "axios"

export default () => {
  const [total,setTotal] = useState(0)
  const [page,setPage] = useState(1)
  const [updated,setUpdated] = useState(0)
  const [list, setList] = useState<any[]>([])
  const update = () => {
    axios.get("http://10.27.1.150:8080/admin/creator/bgaudio/findAll2?page="+ page +"&isHistory=true")
      .then(res => {
        setList(res.data.data)
        setTotal(res.data.data.length)
        console.log(res.data.data.length, "res.data.data.length")
      })
  }
  const startUp = (json: number[], media: string, env: string) => {
    axios.post("http://10.27.1.150:8080/admin/creator/bgaudio/updateExt2",{
      mediaId: media,
      confArr: json,
      env: env,
    }).then(res => {
      console.log(res)
      setUpdated(up => up+ 1)
    })
  }
  return (
    <div>
      <button onClick={update}>开始</button>
      <input value={page} onChange={e => setPage(Number(e.target.value))} ></input>
      <div>总数：{total}</div>
      <div>已更新：{updated}</div>
      <div>未更新：{total - updated}</div>
      {
        list.map(wave => {
          return (
            <WaveRef env={wave.env} url={wave.url} media={wave.url} update={startUp} key={wave.url}/>
          )
        })
      }
    </div>
  )
}
