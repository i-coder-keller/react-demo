import { Random } from "mockjs"
import { getRandom } from "@/utils"
import axios from "axios";
export default {
  url: "/api/scrollPage",
  type: "post",
  response: () => {
    const list = []
    for (let i = 0; i < 20; i++) {
      const width = getRandom(500, 100)
      const height = getRandom(500, 100)
      list.push({
        source:"https://api.btstu.cn/sjbz/api.php",
        width,
        height
      })
    }
    return {
      code: 200,
      data: {
        list
      }
    }
  }
}
