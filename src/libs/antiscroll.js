import T from '../libs/t'

/**
 * Antiscroll pane constructor.
 *
 * @param {Element|jQuery} main pane
 * @parma {Object} options
 * @api public
 */

function Antiscroll(el, opts) {
	this.el = el;
	this.options = opts || {};
	
	this.x = (false !== this.options.x) || this.options.forceHorizontal;
	this.y = (false !== this.options.y) || this.options.forceVertical;
	this.autoHide = false !== this.options.autoHide;
	this.padding = undefined === this.options.padding ? 2 : this.options.padding;
	
	this.inner = this.el.querySelector('.antiscroll-inner');
	
	var innerWidth = T.getStyle(this.inner, 'width', 'parseFloat');
	var innerHeight = T.getStyle(this.inner, 'height', 'parseFloat');
	
	this.inner.style.cssText = "width: " + (innerWidth + (this.y ? scrollbarSize() : 0)) + 'px;' +
		"height: " + (innerHeight + (this.x ? scrollbarSize() : 0)) + 'px;';
	
	this.refresh();
};

/**
 * refresh scrollbars
 * arg scrollbar 是否需要更新
 * @api public
 */

Antiscroll.prototype.refresh = function (arg) {
	var needHScroll = this.inner.scrollWidth > T.getStyle(this.el, 'width', 'parseFloat') + (this.y ? scrollbarSize() : 0),
		needVScroll = this.inner.scrollHeight > T.getStyle(this.el, 'height', 'parseFloat') + (this.x ? scrollbarSize() : 0);
	var updatable = (arg || {updatable: true}).updatable
	
	if (this.x) {
		if (!this.horizontal && needHScroll) {
			this.horizontal = new Scrollbar.Horizontal(this);
		} else if (this.horizontal && !needHScroll) {
			this.horizontal.destroy();
			this.horizontal = null;
			// Loop check whether there is no need to update the scroll bar
		} else if (this.horizontal && updatable) {
			this.horizontal.update();
		}
	}
	
	if (this.y) {
		if (!this.vertical && needVScroll) {
			this.vertical = new Scrollbar.Vertical(this);
		} else if (this.vertical && !needVScroll) {
			this.vertical.destroy();
			this.vertical = null;
			// Loop check whether there is no need to update the scroll bar
		} else if (this.vertical && updatable) {
			this.vertical.update();
		}
	}
};

/**
 * Cleans up.
 *
 * @return {Antiscroll} for chaining
 * @api public
 */

Antiscroll.prototype.destroy = function () {
	if (this.horizontal) {
		this.horizontal.destroy();
		this.horizontal = null
	}
	if (this.vertical) {
		this.vertical.destroy();
		this.vertical = null
	}
	return this;
};

/**
 * Rebuild Antiscroll.
 *
 * @return {Antiscroll} for chaining
 * @api public
 */

Antiscroll.prototype.rebuild = function () {
	this.destroy();
	this.inner.style.cssText = "";
	Antiscroll.call(this, this.el, this.options);
	return this;
};
/**
 * scrollToBottom Antiscroll.
 *
 * @return {Antiscroll} for chaining
 * @api public
 */
Antiscroll.prototype.scrollTo = function (placement) {
	var placements = ['bottom', 'top', 'left', 'right'];
	var vertical = this.vertical
	var horizontal = this.horizontal
	if (placements.indexOf(placement) === -1) return this
	if (['bottom', 'top'].indexOf(placement) > -1) {
		vertical && vertical.scrollTo(placement)
	}
	if (['left', 'right'].indexOf(placement) > -1) {
		horizontal && horizontal.scrollTo(placement)
	}
	return this
};

/**
 * Scrollbar constructor.
 *
 * @param {Element|jQuery} element
 * @api public
 */

function Scrollbar(pane) {
	this.pane = pane;
	this.pane.el.appendChild(this.el);
	
	this.dragging = false;
	this.enter = false;
	this.shown = false;
	
	// hovering
	T.bind(this.pane.el, 'mouseenter', T.proxy(this, 'mouseenter'));
	T.bind(this.pane.el, 'mouseleave', T.proxy(this, 'mouseleave'))
	
	// dragging
	T.bind(this.el, 'mousedown', T.proxy(this, 'mousedown'));
	
	// scrolling
	this.innerPaneScrollListener = T.proxy(this, 'scroll');
	T.bind(this.pane.inner, 'scroll', this.innerPaneScrollListener);
	
	// show
	var initialDisplay = this.pane.options.initialDisplay;
	
	if (initialDisplay !== false) {
		this.show();
		if (this.pane.autoHide) {
			this.hiding = setTimeout(T.proxy(this, 'hide'), parseInt(initialDisplay, 10) || 3000);
		}
	}
};

/**
 * Cleans up.
 *
 * @return {Scrollbar} for chaining
 * @api public
 */

Scrollbar.prototype.destroy = function () {
	this.el.remove();
	T.unbind(this.pane.inner, 'scroll', this.innerPaneScrollListener)
	return this;
};

/**
 * Called upon mouseenter.
 *
 * @api private
 */

Scrollbar.prototype.mouseenter = function () {
	this.enter = true;
	this.show();
};

/**
 * Called upon mouseleave.
 *
 * @api private
 */

Scrollbar.prototype.mouseleave = function () {
	this.enter = false;
	
	if (!this.dragging) {
		if (this.pane.autoHide) {
			this.hide();
		}
	}
};

/**
 * Called upon wrap scroll.
 *
 * @api private
 */

Scrollbar.prototype.scroll = function () {
	if (!this.shown) {
		this.show();
		if (!this.enter && !this.dragging) {
			if (this.pane.autoHide) {
				this.hiding = setTimeout(T.proxy(this, 'hide'), 1500);
			}
		}
	}
	
	this.update();
};

/**
 *
 *
 * @api private
 */

Scrollbar.prototype.scrollTo = function (placement) {
	var fns = {
		verticalToBottom: function (inner) {
			var paneHeight = T.getStyle(this.pane.el, 'height', 'parseFloat');
			inner.scrollTop = inner.scrollHeight - paneHeight
		},
		verticalToTop: function (inner) {
			inner.scrollTop = 0
		},
		horizontalToLeft: function (inner) {
			inner.scrollLeft = 0
		},
		horizontalToRight: function (inner) {
			var paneWidth = T.getStyle(this.pane.el, 'width', 'parseFloat');
			inner.scrollLeft = inner.scrollWidth - paneWidth
		}
	}
	var inner = this.pane.inner;
	switch (placement) {
		case 'bottom':
			fns.verticalToBottom.call(this, inner);
			break;
		case 'top':
			fns.verticalToTop.call(this, inner);
			break;
		case 'left':
			fns.horizontalToLeft.call(this, inner);
			break;
		case 'right':
			fns.horizontalToRight.call(this, inner);
			break;
	}
	var event = document.createEvent('MouseEvents');
	event.initEvent('scroll', true, true);
	inner.dispatchEvent(event);
};

/**
 * Called upon scrollbar mousedown.
 *
 * @api private
 */

Scrollbar.prototype.mousedown = function (ev) {
	ev.preventDefault();
	
	this.dragging = true;
	
	this.startPageY = ev.pageY - parseInt(T.getStyle(this.el, 'top', 'parseFloat'), 10);
	this.startPageX = ev.pageX - parseInt(T.getStyle(this.el, 'left', 'parseFloat'), 10);
	
	// prevent crazy selections on IE
	this.el.ownerDocument.onselectstart = function () {
		return false;
	};
	
	var pane = this.pane, self = this;
	
	var move = T.proxy(this, 'mousemove');
	var mouseup = function () {
		self.dragging = false;
		this.onselectstart = null;
		
		T.unbind(this, 'mousemove', move);
		
		if (!self.enter) {
			self.hide();
		}
	}
	
	T.bind(window.document, 'mousemove', move);
	T.bind(window.document, 'mouseup', mouseup);
};

/**
 * Show scrollbar.
 *
 * @api private
 */

Scrollbar.prototype.show = function (duration) {
	if (!this.shown && this.update()) {
		T.addClass(this.el, 'antiscroll-scrollbar-shown');
		if (this.hiding) {
			clearTimeout(this.hiding);
			this.hiding = null;
		}
		this.shown = true;
	}
};

/**
 * Hide scrollbar.
 *
 * @api private
 */

Scrollbar.prototype.hide = function () {
	if (this.pane.autoHide !== false && this.shown) {
		// check for dragging
		T.removeClass(this.el, 'antiscroll-scrollbar-shown')
		this.shown = false;
	}
};

/**
 * Horizontal scrollbar constructor
 *
 * @api private
 */

Scrollbar.Horizontal = function (pane) {
	var scrollbarH = document.createElement('div');
	scrollbarH.className = 'antiscroll-scrollbar antiscroll-scrollbar-horizontal';
	this.el = pane.el.appendChild(scrollbarH);
	Scrollbar.call(this, pane);
};

/**
 * Inherits from Scrollbar.
 */

inherits(Scrollbar.Horizontal, Scrollbar);

/**
 * Updates size/position of scrollbar.
 *
 * @api private
 */

Scrollbar.Horizontal.prototype.update = function () {
	var paneWidth = T.getStyle(this.pane.el, 'width', 'parseFloat'),
		trackWidth = paneWidth - this.pane.padding * 2,
		inner = this.pane.inner;
	this.el.style.cssText = 'width: ' + (trackWidth * paneWidth / inner.scrollWidth) + 'px;' +
		'left: ' + (trackWidth * inner.scrollLeft / inner.scrollWidth) + 'px;';
	
	return paneWidth < inner.scrollWidth;
};

/**
 * Called upon drag.
 *
 * @api private
 */

Scrollbar.Horizontal.prototype.mousemove = function (ev) {
	var trackWidth = T.getStyle(this.pane.el, 'width', 'parseFloat') - this.pane.padding * 2,
		pos = ev.pageX - this.startPageX,
		barWidth = T.getStyle(this.el, 'width', 'parseFloat'),
		inner = this.pane.inner;
	
	// minimum top is 0, maximum is the track height
	var y = Math.min(Math.max(pos, 0), trackWidth - barWidth);
	
	inner.scrollLeft = (inner.scrollWidth - T.getStyle(this.pane.el, 'width', 'parseFloat'))
		* y / (trackWidth - barWidth);
};

/**
 * Vertical scrollbar constructor
 *
 * @api private
 */

Scrollbar.Vertical = function (pane) {
	var scrollbarV = document.createElement('div');
	scrollbarV.className = 'antiscroll-scrollbar antiscroll-scrollbar-vertical';
	this.el = pane.el.appendChild(scrollbarV);
	Scrollbar.call(this, pane);
};

/**
 * Inherits from Scrollbar.
 */

inherits(Scrollbar.Vertical, Scrollbar);

/**
 * Updates size/position of scrollbar.
 *
 * @api private
 */

Scrollbar.Vertical.prototype.update = function () {
	var paneHeight = T.getStyle(this.pane.el, 'height', 'parseFloat'),
		trackHeight = paneHeight - this.pane.padding * 2,
		inner = this.pane.inner;
	
	var scrollbarHeight = trackHeight * paneHeight / inner.scrollHeight;
	scrollbarHeight = scrollbarHeight < 20 ? 20 : scrollbarHeight;
	
	var topPos = trackHeight * inner.scrollTop / inner.scrollHeight;
	
	if ((topPos + scrollbarHeight) > trackHeight) {
		var diff = (topPos + scrollbarHeight) - trackHeight;
		topPos = topPos - diff - 3;
	}
	
	this.el.style.cssText = 'height: ' + scrollbarHeight + 'px;top: ' + topPos + 'px';
	
	return paneHeight < inner.scrollHeight;
};

/**
 * Called upon drag.
 *
 * @api private
 */

Scrollbar.Vertical.prototype.mousemove = function (ev) {
	var paneHeight = T.getStyle(this.pane.el, 'height', 'parseFloat'),
		trackHeight = paneHeight - this.pane.padding * 2,
		pos = ev.pageY - this.startPageY,
		barHeight = T.getStyle(this.el, 'height', 'parseFloat'),
		inner = this.pane.inner
	
	// minimum top is 0, maximum is the track height
	var y = Math.min(Math.max(pos, 0), trackHeight - barHeight);
	
	inner.scrollTop = (inner.scrollHeight - paneHeight)
		* y / (trackHeight - barHeight);
};

/**
 * Cross-browser inheritance.
 *
 * @param {Function} constructor
 * @param {Function} constructor we inherit from
 * @api private
 */

function inherits(ctorA, ctorB) {
	function f() {
	};
	f.prototype = ctorB.prototype;
	ctorA.prototype = new f;
};

/**
 * Scrollbar size detection.
 */

function scrollbarSize () {
	if (Antiscroll.scrollbarSize === undefined) {
		var div = document.createElement('div');
		var innerDiv = document.createElement('div');
		div.className = 'antiscroll-inner';
		div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;';
		innerDiv.style.cssText = 'height:100px;width:100%';
		div.appendChild(innerDiv);
		
		document.body.appendChild(div);
		var w1 = T.getStyle(div, 'width', 'parseFloat');
		var w2 = T.getStyle(innerDiv, 'width', 'parseFloat');
		
		document.body.removeChild(div);
		
		Antiscroll.scrollbarSize = w1 - w2;
	}
	return Antiscroll.scrollbarSize;
}

export default Antiscroll