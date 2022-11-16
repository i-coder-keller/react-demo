import { Random } from "mockjs"
import { getRandom } from "@/utils"
import axios from "axios";
export default {
  url: "/api/scrollPage",
  type: "post",
  response: async () => {
    for (let i = 0; i < 20; i++) {
      const { data } = await axios.get("/image/api/api.php?return=json")
      console.log(data)
    }
    return {
      code: 200,
      data: {
        list: [1]
      }
    }
  }
}
