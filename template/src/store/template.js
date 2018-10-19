import { observable, action } from 'mobx'

class Template {
  @observable msg = 'test'

  @action
  changeMsg = (msg) => {
  this.msg = msg 
  }
}
export default Template
