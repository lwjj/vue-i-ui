<template>
  <div id="app">
    <!-- <div class="row">
      <i-button>按钮</i-button>
      <i-button @click="fn" type="primary">按钮</i-button>
      <i-button type="success">按钮</i-button>
      <i-button type="warning">按钮</i-button>
      <i-button type="info">按钮</i-button>
      <i-button type="danger">按钮</i-button>
    </div>
    <div class="row">
      <i-button plain round>按钮</i-button>
      <i-button icon="one-icon-child" plain round type="primary">按钮</i-button>
      <i-button icon="one-icon-child" plain round type="success">按钮</i-button>
      <i-button plain round type="warning">按钮</i-button>
      <i-button plain round type="info">按钮</i-button>
      <i-button plain round type="danger">按钮</i-button>
    </div>
    <div class="row">
      <i-button plain circle>拆</i-button>
      <i-button plain circle type="primary">拆</i-button>
      <i-button plain circle type="success">拆</i-button>
      <i-button plain circle type="warning">拆</i-button>
      <i-button plain circle type="info">拆</i-button>
      <i-button plain circle type="danger">拆</i-button>
    </div>
    <div class="row">
      <i-button plain circle icon="one-icon-child"></i-button>
      <i-button plain circle icon="one-icon-child" type="primary"></i-button>
      <i-button plain circle icon="one-icon-child" type="success"></i-button>
      <i-button plain circle icon="one-icon-child" type="warning"></i-button>
      <i-button plain circle icon="one-icon-child" type="info"></i-button>
      <i-button plain circle disabled icon="one-icon-child" type="danger"></i-button>
    </div> -->
    <i-button type="primary" @click="open">打开</i-button>
    <i-dialog title="温馨提示" width="30%" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template #footer>
        <i-button type="primary" @click="visible = false">确定</i-button>
        <i-button type="primary" @click="visible = false" plain>取消</i-button>
      </template>
    </i-dialog>
    <!-- <i-dialog>
      <template #title><h2>这是标题</h2></template>
    </i-dialog> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    fn () {
      console.log(123)
    },
    open () {
      this.visible = !this.visible
    },
    close (val) {
      this.visible = val
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 10px;
}
</style>
