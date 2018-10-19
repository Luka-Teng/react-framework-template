const templateTest = async (action, put) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, 3000)
  })
  put({type: 'template/action', payload: { author: 'lll' }})
}

export default {
  templateTest
}
