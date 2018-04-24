<script>
	import T from '../libs/t'
	import Antiscroll from '../libs/antiscroll'
	import ResizeSensor from 'css-element-queries/src/ResizeSensor'

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
			scrolling: {
				required: false,
				type: Function
			},
			scrollToBottom: {
				required: false,
				type: Function
			},
            transitionTarget: {
				required: false,
                type: String
            },
            barClass: {
				required: false,
                type: String
            },
			initialDisplay: {
				required: false,
				type: Boolean,
				default: () => Boolean(1)
			}
		},
		data() {
			return {}
		},
		mounted() {
			let {initialDisplay, barClass} = this
			this.scroller = new Antiscroll(this.$el, {initialDisplay, barClass})
			this._onScroll = T.proxy(this, 'onScroll')
			this.scroller.inner.addEventListener('scroll', this._onScroll, false)
			this.attachDimensionChangeEvent()
            this._dettachTransitionEvent = this.attachTransitionEvent()
		},
		beforeDestroy() {
			this.scroller && this.scroller.destroy()
			this.scroller && this.scroller.inner.removeEventListener('scroll', this._onScroll, false)
			Object.keys(this.resizeSensors).forEach(key => this.resizeSensors[key].detach())
			this.resizeSensors = null
			this.scroller = null
			this._onScroll = null
            typeof this._dettachTransitionEvent === 'function' && this._dettachTransitionEvent()
            this._dettachTransitionEvent = null
		},
		watch: {
			'height': 'applyDimension',
			'width': 'applyDimension'
		},
		computed: {
			_$styObj() {
				let {_$height, _$width} = this
				let hash = {}
                _$height && (hash['height'] = _$height)
				_$width && (hash['width'] = _$width)
				return hash
			},
			_$height() {
				let {height} = this
				height = height && height + ''
                if (!height) return '100%'
                height = parseFloat(height)
				return height + 'px'
			},
			_$width() {
				let {width} = this
				width = width && width + ''
				if (!width) return '100%'
                width = parseFloat(width)
				return width + 'px'
			}
		},
		methods: {
			onScroll(evt) {
				let innerHeight = T.getStyle(this.scroller.inner, 'height', 'parseFloat')
				let scrollHeight = this.scroller.inner.scrollHeight
				let scrollTop = this.scroller.inner.scrollTop

				if (typeof this.scrolling === 'function') {
					this.scrolling.call(this, this.scroller, evt)
				}
				if (scrollHeight <= innerHeight + scrollTop) {
					if (typeof this.scrollToBottom === 'function') {
						this.scrollToBottom.call(this, this.scroller, evt)
					}
				}
			},
			scrollTo(placement) {
				let scroller = this.scroller
				if (scroller) {
					scroller.scrollTo(placement)
				}
			},

			refresh() {
				let scroller = this.scroller
				if (scroller) {
					this.applyDimension()
				}
			},
            applyDimension () {
	            let scroller = this.scroller
                setTimeout(() => {
	                scroller && scroller.rebuild()
	                this.detachDimensionChangeEvent()
	                this.attachDimensionChangeEvent()
                }, 0)
            },
			attachDimensionChangeEvent() {
                let resizeSensors = this.resizeSensors = {}
                let scroller = this.scroller
                let innerChild = scroller.inner.childNodes[0]
                resizeSensors.innerChildObserver = new ResizeSensor(innerChild, () => {
                	setTimeout(() => {
                        scroller.refresh()
                    }, 0)
                })
			},
			detachDimensionChangeEvent() {
				let resizeSensors = this.resizeSensors
				Object.keys(resizeSensors).forEach(key => this.resizeSensors[key].detach())
			},
            attachTransitionEvent () {
				let target = null
				let el = this.$el
                let { transitionTarget } = this
                let queried = document.querySelectorAll(transitionTarget)
                queried = [].slice.call(queried, 0)
                if (queried.length === 0) return
                if (queried.length === 1) target = queried[0]
                if (queried.length > 1 ) {
	                let idx
					while (el) {
						idx = queried.indexOf(el)
                        if (idx === -1) {
                            el = el.parentNode
                        } else {
                        	break
                        }
                    }
                    target = queried[idx]
                }
                if (target) {
                    let transitionEnd = (evt) => ['width', 'height'].indexOf(evt.propertyName) > -1 && this.refresh()
                    // Safari 3.1 到 6.0
	                target.addEventListener('webkitTransitionEnd', transitionEnd)
                    // 标准语法
	                target.addEventListener('transitionend', transitionEnd)
                    return () => {
	                    target.removeEventListener('webkitTransitionEnd', transitionEnd)
	                    target.removeEventListener('transitionend', transitionEnd)
                    }
                }
            }
		}

	}
</script>

<template>
    <div class="antiscroll-wrap" :style="_$styObj">
        <div class="antiscroll-inner" :style="_$styObj">
            <div class="inner-in-fact">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
