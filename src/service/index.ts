import Mock from "mockjs"
import ScrollPage from "@/mock/scrollPage"

const mocks = [
  ScrollPage
]

mocks.forEach(m => {
  Mock.mock(m.url, m.type, m.response)
})

