# Vue-Antiscroll-Addon


## Features
+ package the [antiscroll](https://github.com/Automattic/antiscroll "antiscroll") use vue component
+ enhance it with [css-element-queries](https://github.com/marcj/css-element-queries "css-element-queries")
+ perfectly unified native scroll bar

## Support

Support Vue.js 2.0+


## Install

```javascript
npm install vue-antiscroll-addon
```

## Useage
```javascript
// in entry file
import Vue from 'vue'
import vueAntiscroll from 'vue-antiscroll-addon'
Vue.component('vueAntiscroll', vueAntiscroll)
```

### Example
```html
<VueAntiscroll class="el-menu__wrapper width-100" :height="menuBoxHeight">
    // content
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
| barClass |string|auto add when initialized scrollbar| —|—|
| transitionTarget |string|css selector(When your scroll toggle display in an transition element, you may provide **transitionTarget**, then the scroll will auto **refresh()** after **transitionend** event )| eg: '.abc'|—|
## Api
1. scrollTo

```javascript
   <VueAntiscroll ref="antiscroll" class="el-menu__wrapper width-100" :height="menuBoxHeight">
       // content
   </VueAntiscroll>
   // paramter
   // bottom, top, left, right
   this.$refs.antiscroll.scrollTo('bottom')
```
2. refresh
```javascript
   <VueAntiscroll ref="antiscroll" class="el-menu__wrapper width-100" :height="menuBoxHeight">
       // content
    </VueAntiscroll>
    //You may need it when the display is switched
    this.$refs.antiscroll.refresh()
```
## Compatibility

PC: IE9+

## LICENSE

MIT
