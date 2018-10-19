export const TEMPLTATE_ACTION = 'template/action'

export const getTemplateAction = (author) => ({
  type: TEMPLTATE_ACTION,
  payload: {
    author
  }
})
