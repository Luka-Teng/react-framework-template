const {
  sortDependencies,
  installDependencies,
  printMessage
} = require('./utils')
const path = require('path')

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
    },
    autoInstall: {
      type: 'confirm',
      message: '是否要帮您自动运行"npm install"在构建完成之后'
    }
  },
  filters: {
    'src/router/**/*': 'router',
    'src/store/**/*': "store && storeConfig === 'mobx'",
    'src/redux/**/*': "store && storeConfig === 'redux'"
  },
  complete: (data, { chalk }) => {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}
