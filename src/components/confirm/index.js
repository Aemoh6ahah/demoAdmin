import { createApp, nextTick } from 'vue'
import Comfirm from './Comfirm.vue'

let carlinxModal = {
  comfirm: function (data) { //确认弹窗
    let d;
    d = document.createElement('div')
    document.body.appendChild(d)
    const ComfirmBox = createApp(Comfirm)
    const r = ComfirmBox.mount(d)
    console.log(r);
    nextTick(() => {
      for (const key in data) {
        r[key] = data[key]
      }
      r.visible = true // show 和弹窗组件里的show对应，用于控制显隐
      r.$El_P = d;
    })
  }
}
export default carlinxModal