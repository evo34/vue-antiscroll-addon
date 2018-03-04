# Vue-Antiscroll


## Features
+ package the ***antiscroll*** use vue component
+ enhance it with ***css-element-queries***
+ perfectly unified native scroll bar

## Support

Support Vue.js 2.0+


## Install

```javascript
npm install vue-antiscroll
```

## Useage
```javascript
// in entry file
import Vue from 'vue'
import vueAntiscroll from 'vue-antiscroll'
Vue.component('vueAntiscroll', vueAntiscroll)
```

### Example
```html
<VueAntiscroll class="el-menu__wrapper width-100" :height="menuBoxHeight">
    // 滚动内容
</VueAntiscroll>
```

## Props

| Name    | Type    | Description   |  Optional value | Default |
| ------------- |-------| -----| ----| -------|
| height |int|the container height| —|—|
| width |int|the container width| —|—|
| onScrolling |function|on scroll callback —|—|
| onScrollToBottom |function|on scrollToBottom called up| —|—|
| initialDisplay |boolean|Whether to display when initialized scrollbar| —|—|

## Api
1. scrollTo

```javascript
   <VueAntiscroll ref="antiscroll" class="el-menu__wrapper width-100" :height="menuBoxHeight">
       // 滚动内容
   </VueAntiscroll>
   // paramter
   // bottom, top, left, right
   this.$refs.antiscroll.scrollTo('bottom')
```
2. refresh
```javascript
   <VueAntiscroll ref="antiscroll" class="el-menu__wrapper width-100" :height="menuBoxHeight">
       // 滚动内容
    </VueAntiscroll>
    //You may need it when the display is switched
    this.$refs.antiscroll.refresh()
```
## Compatibility

PC: IE9+

Mobile: be happy to use

## LICENSE

MIT
