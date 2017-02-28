let collision = function (obj1, obj2) {
  for (let i in obj1) {
    for (let j in obj2) {
      let h1 = obj1[i]
      let h2 = obj2[i]
      if (h1.form == "rect" && h2.form == "rect") {
        if (h1.x < h2.x + h2.width &&
            h1.x + h1.width > h2.x &&
            h1.y < h2.y + h2.height &&
            h1.height + h1.y > h2.y) {
          console.log('Collision beetween : ')
          console.log(h1)
          console.log(h2)
          return true
        }
      }
    }
  }
  return false
}