module.exports = {
  prompts: {
    name: {
      type: 'input',
      message: '项目名'
    },
    router: {
      type: 'confirm',
      message: '是否使用react-router'
    },
    store: {
      type: 'confirm',
      message: '是否使用全局管理工具'
    },
    storeConfig: {
      when: 'store',
      message: '选择全局管理工具',
      type: 'list',
      choices: [
        {
          name: 'mobx',
          value: 'mobx'
        },
        {
          name: 'redux',
          value: 'redux'
        }
      ]
    }
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': "store && storeConfig === 'mobx'",
    'src/redux/**/*': "store && storeConfig === 'redux'"
  }
}
