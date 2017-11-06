#### react poker
- 用了一个没用过的东西 [postcss](http://postcss.org/)

#### 编程过程中的思考
**问题**：使用React的组件过程中，也使用`react-router`。路由`/`的`index.js`组件里面，在生命周期函数`ComponentDidMount()`里面，使用了`window.onresize`，一次来固定整个index的高度，但是在初次加载`index`组件时，当`window`开始`resize`的时候，并没有触发`window.onresize`里面的函数，然后切换到路由`/origin`，再切换回`/`路由，正常的工作。关键代码如下：
```javascript
componentDidMount(){
		window.onresize = () => {
			HandleContainerHeight('index');//处理高度的函数
		}
	}
```
官方文档中，对`componentDidMount()`的说明是：
> componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

可见`componentDidMount()`会在组件马上挂在后立即执行，我在里面添加了`window.onresize`事件，理论上讲，在`index`挂载完毕后，`window.onreisze`事件里面已经添加了我的`HandleContainerHeight()`函数，但是实际上`window`并没有触发`resize`事件。

**解疑** 经过调试，算是发现了问题。在调试过程中，分辨在`navs`组件和`index`组件的`componentDidMout()`函数中进行`console.log`，发现`index`先执行，然后执行`navs`，那么在`navs`和`index`中都进行了`window.onresize`的绑定，所以是`navs`的`window.onresize`事件覆盖了`index`的`window.onresize`事件，所以当再次进入`index`组件时，覆盖回来了，所以这个时候`index`的`window.onresize`能正常执行。

**问题** 前一阵子应为需求打算用`draftjs`做一个富文本编辑器，然而，可能是我太笨了，感觉太绕了，有一些功能无法实现，最终转战`vue`，现在打算弄清楚这个到底怎么弄，但是看来数据流清楚了，但是很多里面的东西还需要理一理。**[draftjs](https://draftjs.org/)**