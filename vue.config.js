const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
module.exports = {
  // 是否开启eslint保存检测 ,它的有效值为 true || false || ‘error’
  lintOnSave: false,
}
