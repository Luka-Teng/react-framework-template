import { configure } from 'mobx'
import Template from './template'

configure({enforceActions: 'observed'})

class Store {
  constructor () {
    this.template = new Template()
  }
}

const store = new Store()

export default store
