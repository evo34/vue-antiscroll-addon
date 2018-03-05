var T = {
	proxy: function (context, fnName) {
		var fn = context[fnName]
		return function () {
			return fn.apply(context, arguments)
		}
	},
	getStyle: function (obj, prop, parse) {
		let ret
		if (['width', 'height'].indexOf(prop) > -1) return this.getDimension(obj, prop)
		if (obj.currentStyle) {
			ret = obj.currentStyle[prop];
		} else if (window.getComputedStyle) {
			prop = prop.replace(/([A-Z])/g, "-$1");
			prop = prop.toLowerCase();
			ret = window.getComputedStyle(obj, null).getPropertyValue(prop);
			return ret
		}
		return parse ? window[parse](ret) : ret;
	},
	
	getDimension: function (elem, prop) {
		return prop === 'width' ? elem.offsetWidth : elem.offsetHeight
	},
	
	addClass: function (element, cls) {
		var className = element.className;
		var classNames = className.split(/\s+/);
		if (classNames.indexOf(cls) === -1) {
			classNames.push(cls);
		}
		element.className = classNames.join(' ');
		return element
	},
	removeClass: function (element, cls) {
		var className = element.className;
		var classNames = className.split(/\s+/);
		var index;
		if ((index = classNames.indexOf(cls)) > -1) {
			classNames.splice(index, 1);
		}
		element.className = classNames.join(' ');
		return element
	},
	bind: function (element, eventType, fn) {
		if (document.addEventListener) {
			element.addEventListener(eventType, fn, false);
		} else if (document.attachEvent) {
			element.attachEvent('on' + eventType, fn);
		}
		return element;
	},
	unbind: function (element, eventType, fn) {
		if (document.removeEventListener) {
			element.removeEventListener(eventType, fn, false);
		} else if (document.detachEvent) {
			element.detachEvent('on' + eventType, fn);
		}
		return element;
	}
}
window.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 100)
		}
})()
export default T