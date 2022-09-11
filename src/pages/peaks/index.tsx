import React, { useEffect, useState } from "react"
import "./index.less"
import data from "./config.json"
import Peaks from "peaks.js"
export default () => {
  const [viewData, setViewData] = useState([])
  useEffect(() => {
    initPeaks()
  }, [])
  const initPeaks = () => {
    const options = {
      zoomview: {
        container: document.getElementById("zoomview-container")
      },
      overview: {
        container: document.getElementById("overview-container")
      },
      mediaElement: document.querySelector("audio"),
      dataUri: {
        arraybuffer: data.data.list[0].waveformConfig
      }
    }
    Peaks.init(options, function (err, peaks) {
      if (err) {
        console.error("Failed to initialize Peaks instance: " + err.message);
        return;
      }

    });
  }
  return (
    <div className="container">
      <div id="zoomview-container"></div>
      <div id="overview-container"></div>
      <audio src={data.data.list[0].url}></audio>
    </div>
  )
}