<script>
    import $ from 'jquery'
    import '../libs/jquery-mousewheel'
    export default {
        props: {
            height: {
                required: false,
                type: null
            },
            onScrolling: {
                required: false,
                type: Function
            },
            onScrollToBottom: {
                required: false,
                type: Function
            }
        },
        data () {
           return {} 
        },
        mounted () {
            this.scroller = $('.box-wrap').antiscroll().data('antiscroll')
            this._onScroll = $.proxy(this.onScroll, this)
            this.scroller.inner.on('scroll', this._onScroll)
        },
        beforeDestroy () {
            this.scroller && this.scroller.destroy()
            this.scroller && this.scroller.inner.off('scroll')
            this.scroller = null
            this._onScroll = null
        },
        computed: {
            _$styObj () {
                let {_$height, _$width} = this
                let hash = {height: _$height}
                _$width && (hash['width'] = _$width)
                return hash
            },
            _$height () {
                let {height} = this
                height = height + ''
                if (height.lastIndexOf('px') === -1) return height + 'px'
                else height
            },
            _$width () {
                let {width} = this
                width = width && width + ''
                if (!width) return null
                if (width.lastIndexOf('px') === -1) return width + 'px' 
                else width
            }
        },
        methods: {
            onScroll (evt) {
                let innerHeight = this.scroller.inner.height()
                let scrollHeight = this.scroller.inner.get(0).scrollHeight
                let scrollTop = this.scroller.inner.get(0).scrollTop

                if (typeof this.onScrolling === 'function') {
                    this.onScrolling.call(this, this.scroller, evt)
                }
                if (scrollHeight <= innerHeight + scrollTop) {
                    if (typeof this.onScrollToBottom === 'function') {
                        this.onScrollToBottom.call(this, this.scroller, evt)
                    }
                }
            }
        }
        
    }
</script>
<template>
  <div class="box-wrap antiscroll-wrap">
    <div class="antiscroll-inner" :style="_$styObj">
        <slot></slot>
    </div>
  </div>
</template>
