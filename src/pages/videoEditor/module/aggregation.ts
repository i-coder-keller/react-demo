const imgReg = /<img.*?(?:>|\/>)/gi
const srcRef = /src=['"]?([^'"]*)['"]?/i;
export const aggregation = (nodes: HTMLElement[]): Array<{type: string; data: Array<string> | string}> => {
  const result = []
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].outerHTML.includes("img")) {
      const container = document.createElement("div")
      container.innerHTML = nodes[i].outerHTML
      const src = [].map.call(container.querySelectorAll("img"), (img: HTMLImageElement) => img.src)
      result.push({
        type: "img",
        data: src
      })
    }
    if (nodes[i].outerText !== "") {
      result.push({
        type: "p",
        data: nodes[i].outerText
      })
    }
  }
  return result
}