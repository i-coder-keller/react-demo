import React, {useEffect, useRef, useState} from "react"
import Card, { IProps } from "./card"
import axios from "axios"
const column = 5
export default () => {
  const container = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)
  const [ viewData, setViewData ] = useState<Array<IProps>>([])
  const [loading, setLoading] = useState<boolean>( false)
  const fetchData = async () => {
    if (loading) return
    try {
      setLoading(true)
      console.log("请求数据")
      const { data } = await axios.post("/api/scrollPage")
      setViewData(cards => [...cards, ...data.data.list])
      setLoading(false)
    } catch (e) {
      console.warn(e)
    }
  }
  const start = () => {
    requestAnimationFrame(() => {
      container!.current.scrollTo({
        top: container!.current.scrollTop + 1,
      })
      start()
    })
  }
  const initEvent = () => {
    container!.current.addEventListener("scroll", e => {
      const target = e.target as HTMLDivElement
      const scrollHeight = target!.scrollHeight
      const clientHeight = target!.clientHeight
      const scrollTop = target!.scrollTop
      const bottom = 300
      const scrollBottom = scrollHeight - clientHeight - scrollTop
      if (scrollBottom < bottom) {
        fetchData()
      }
    })
  }
  useEffect(() => {
    fetchData()
    start()
    initEvent()
  }, [])
  return (
    <div className="w-full h-full overflow-y-scroll flex gap-2.5" ref={container}>
      {
        <div className="flex grow flex-col gap-2.5" ref={target}>
          {
            viewData.map((itemData, key) => (<Card {...itemData} key={`children-${key}`}></Card>))
          }
        </div>
      }
    </div>
  )
}
