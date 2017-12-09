# vuex-addressList
使用vuex实现一个简单的移动端通讯录:ledger::blue_book::orange_book::notebook:
# 预览

![img](https://github.com/longmimi/vuex-addressList/blob/master/src/assets/gif.gif)


# 步骤
* git clone 地址
* npm install
* npm run dev

# 总结

* 样式由于采用百分比和px，可能在不同手机效果不同，打算后面用rem重写一下。
* 使用vuex实现不同组件间状态共享，这个项目只有两个状态是共享的，把这两个状态[以载荷形式分发](https://vuex.vuejs.org/zh-cn/actions.html#%E5%88%86%E5%8F%91-action),没有使用常量代替mutation事件类型。

    * 控制弹窗组件的v-if属性值
    * list组件中的电电话号码
* 由于功能简单，并没有使用`module`,也没有把`actions`，`mutations`抽离出去，待日后改进
* 项目添加了使用`gh-pages`来实现项目在线预览，但是我将编译打包好的`dist`文件夹下`静态资源文件`放在gh-pages分支上并没有达到预期的效果，一番查找也不知道原因，希望有人如果看到可以指正我。
* 这里说一下我的步骤：

  * 建立github仓库，并clone到本地
  * 添加项目代码，push到远程master分支
  * 建立gh-pages分支并切换，将打包出来的`静态资源文件`：`dist`下的文件push到`gh-pages`分支
  * 在 http://longtean.top/vuex-addressList/index.html 查看效果
