const path = require('path')
const fs = require('fs')
const spawn = require('child_process').spawn

/**
 * 重新排列package.json依赖
 */
exports.sortDependencies = function sortDependencies (data) {
  const packageJsonFile = path.join(
    data.inPlace ? '' : data.destDirName,
    'package.json'
  )
  const packageJson = JSON.parse(fs.readFileSync(packageJsonFile))
  if (packageJson.devDependencies) {
    packageJson.devDependencies = sortObject(packageJson.devDependencies)
  }
  if (packageJson.dependencies) {
    packageJson.dependencies = sortObject(packageJson.dependencies)
  }
  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2) + '\n')
}

function sortObject (object) {
  const sortedObject = {}
  Object.keys(object)
    .sort()
    .forEach(item => {
      sortedObject[item] = object[item]
    })
  return sortedObject
}

/**
 * 安装依赖
 * @param {string} cwd 项目地址
 */
exports.installDependencies = function installDependencies (
  cwd,
  executable,
  color
) {
  console.log(`\n\n# ${color('Installing project dependencies ...')}`)
  console.log('# ========================\n')
  return runCommand(executable ? 'npm' : 'none', ['install'], {
    cwd
  })
}

/**
 * 输出最后的完成信息.
 * @param {Object} data metadata.
 */
exports.printMessage = function printMessage (data, { green, yellow }) {
  const message = `
# ${green('Project initialization finished!')}
# ========================
To get started:
  ${yellow(
    `${data.inPlace ? '' : `cd ${data.destDirName}\n  `}${installMsg(
      data
    )}npm run start`
  )}
`
  console.log(message)
}

function installMsg (data) {
  return !data.autoInstall ? 'npm install \n  ' : ''
}

/**
 * Spawn一个子进程用来执行shell命令
 * @param {string} cmd 命令
 * @param {array<string>} args 参数
 * @param {object} options 选项，cwd: 命令执行目录...
 */
function runCommand (cmd, args, options) {
  return new Promise((resolve, reject) => {
    const spwan = spawn(
      cmd,
      args,
      Object.assign(
        {
          cwd: process.cwd(),
          stdio: 'inherit',
          shell: true
        },
        options
      )
    )

    spwan.on('exit', () => {
      resolve()
    })
  })
}
