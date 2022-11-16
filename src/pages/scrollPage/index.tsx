import React, {useEffect, useState} from "react"
import Card, { IProps } from "./card"
import axios from "axios"
const column = 6
export default () => {
  const [ viewData, setViewData ] = useState<Array<Array<IProps>>>(new Array(column).fill(new Array(column).fill([])))
  const fetchData = async () => {
    try {
      const { data } = await axios.post("/api/scrollPage")
      data.data.list.forEach((cardData: IProps) => {
        calculateImagePosition(cardData)
      })
      console.log(data.data.list)
    } catch (e) {
      console.warn(e)
    }
  }
  const calculateImagePosition = (cardData: IProps) => {
    const targets = viewData.map((target, index) => ({
      height: target.reduce((pre, nex) => (pre+nex.height), 0),
      index
    }))
    targets.sort((a, b) => a.height - b.height)
    cardData.height = (100 / cardData.width) * cardData.height
    cardData.height = 100
    setViewData(vd => {
      return vd.map((_, index) => {
        if (index === targets[0].index) return [..._, cardData]
        return _
      })
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="w-full h-full flex gap-2.5">
      {
        viewData.map((vd, index) => {
          return (
            <div className="flex grow flex-col" key={`parent-${index}`}>
              {
                vd.map((itemData, key) => (<Card {...itemData} key={`children-${key}`}></Card>))
              }
            </div>
          )
        })
      }
    </div>
  )
}
