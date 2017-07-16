<script>
    import Antiscroll from '../libs/antiscroll'
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    const proxy = function(context, fnName) {
        var fn = context[fnName]
        return function() {
            return fn.apply(context, arguments)
        }
    }
    const getStyle = function(oDiv, attr) {
        if (oDiv.currentStyle) return oDiv.currentStyle[attr];
        return getComputedStyle(oDiv, false)[attr];
    }
    export default {
        props: {
            height: {
                required: false,
                type: null
            },
            width: {
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
            },
            loopCheck: {
                required: false,
                type: Boolean
            }
        },
        data() {
            return {}
        },
        mounted() {
            // var antiscrollWrap= this.$el.querySelector('.antiscroll-wrap')
            this.scroller = new Antiscroll(this.$el, {
                initialDisplay: false
            })
            this._onScroll = proxy(this, 'onScroll')
            this.scroller.inner.addEventListener('scroll', this._onScroll, false)
            this._loopCheck()
        },
        beforeDestroy() {
            this.scroller && this.scroller.destroy()
            this.scroller && this.scroller.inner.removeEventListener('scroll', this._onScroll, false)
            this.scroller = null
            this._onScroll = null
        },
        computed: {
            _$styObj() {
                let {
                    _$height,
                    _$width
                } = this
                let hash = {
                    height: _$height
                }
                _$width && (hash['width'] = _$width)
                return hash
            },
            _$height() {
                let {
                    height
                } = this
                height = height + ''
                if (height.lastIndexOf('px') === -1) return height + 'px'
                return height
            },
            _$width() {
                let {
                    width
                } = this
                width = width && width + ''
                if (!width) return null
                if (width.lastIndexOf('px') === -1) return width + 'px'
                return width
            }
        },
        methods: {
            onScroll(evt) {
                let innerHeight = getStyle(this.scroller.inner, 'height')
                let scrollHeight = getStyle(this.scroller.inner, 'scrollHeight')
                let scrollTop = getStyle(this.scroller.inner, 'scrollTop')
    
                if (typeof this.onScrolling === 'function') {
                    this.onScrolling.call(this, this.scroller, evt)
                }
                if (scrollHeight <= innerHeight + scrollTop) {
                    if (typeof this.onScrollToBottom === 'function') {
                        this.onScrollToBottom.call(this, this.scroller, evt)
                    }
                }
            },
            _loopCheck() {
                if (this.loopCheck) {
                    requestAnimationFrame(this._updateContentSize.bind(this));
                }
            },
            _updateContentSize() {
                try {
                    var scroller = this.scroller;
                    var arr = []
                    scroller.vertical && arr.push(scroller.vertical);
                    scroller.horizontal && arr.push(scroller.horizontal);
                    arr.forEach(scroller => scroller.updateViewPort());

                    requestAnimationFrame(this._updateContentSize.bind(this));
                } catch (e) {
                    console.info('滚动条错误辣!');
                }
            },
        }
    
    }
</script>

<template>
    <div class="antiscroll-wrap">
        <div class="antiscroll-inner" :style="_$styObj">
            <slot></slot>
        </div>
    </div>
</template>
