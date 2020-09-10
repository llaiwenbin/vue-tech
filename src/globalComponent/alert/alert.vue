<template>
  <div class="alert">
    <div
      v-for="item in notices"
      :key="item.name"
      class="alert-main"
    >
      <div class="alert-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template> 
<script>
// Alert 组件不同于常规的组件使⽤⽅式，它最终是通过 JS 来调⽤ 的，因此组件不⽤预留 props 和 events 接⼝。
let seed = 0;
function getUuid() {
    return "alert_" + seed++;
}
export default {
    data() {
        return { notices: [] };
    },
    methods: {
        // 只需要在add中添加不同的参数就可以进行很复杂的扩展，参数 --> template
        add(notice) {
            //name，deration，contain
            const name = getUuid();
            let _notice = Object.assign({ name: name }, notice);
            this.notices.push(_notice); // 定时移除，单位：秒
            const duration = notice.duration;
            setTimeout(() => {
                this.remove(name);
            }, duration * 1000);
            return name;
        },
        remove(name) {
            const notices = this.notices;
            for (let i = 0; i < notices.length; i++) {
                if (notices[i].name === name) {
                    this.notices.splice(i, 1);
                    break;
                }
            }
        },
    },
};
</script> 
<style>
.alert {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
}
.alert-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
}
</style>