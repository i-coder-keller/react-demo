import React, {useState} from "react"

export default () => {
  const [total,setTotal] = useState(0)
  const [updated,setUpdated] = useState(0)
  const update = async () => {
    const data: any = await fetch("localhost:8080/admin/creator/bgaudio/findAll2?page=1&isHistory=true")
    setTotal(data.length)
    startUp(data.list)
  }
  const startUp = (list: Array<any>) => {
    for (let i = 0; i < list.length; i++) {
      fetch(list[i].url,{
        method: "get",
        headers: new Headers({responseType: "blob"})
      }).then(res => {
        console.log(res)
      })
    }
  }
  return (
    <div>
      <button onClick={update}>开始</button>
      <div>总数：{total}</div>
      <div>已更新：{total}</div>
      <div>未更新：{total}</div>
    </div>
  )
}
