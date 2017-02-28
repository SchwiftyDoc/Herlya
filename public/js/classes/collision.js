let collision = function (obj1, obj2) {
  let result = false
  for (let h1 in obj1) {
    for (let h2 in obj2) {
      if (h1.form == "rect" && h2.form == "rect") {
        if (h1.x < h2.x + h2.width &&
          h1.x + h1.width > h2.x &&
          h1.y < h2.y + h2.height &&
          h1.height + h1.y > h2.y) {
          result = true
          break
        }
      }
    }
    if (result)
      break
  }
  return result
}