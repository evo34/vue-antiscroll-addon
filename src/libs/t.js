var T = {
	proxy: function(context, fnName) {
		var fn = context[fnName]
		return function () {
			return fn.apply(context, arguments)
		}
	},
	getStyle: function(oDiv, attr){
		var hasX = ['width', 'height', 'top', 'left', 'scrollWith', 'scrollHeight'];
		if (oDiv.currentStyle) return oDiv.currentStyle[attr];
		var v = getComputedStyle(oDiv, null).getPropertyValue(attr);
		if (hasX.indexOf(attr) > -1) {
			v = parseFloat(v);
		}
		return v
	},
	addClass: function(element, cls) {
		var className = element.className;
		var classNames = className.split(/\s+/);
		if (classNames.indexOf(cls) === -1) {
			classNames.push(cls);
		}
		element.className = classNames.join(' ');
		return element
	},
	removeClass: function(element, cls) {
		var className = element.className;
		var classNames = className.split(/\s+/);
		var index;
		if ((index = classNames.indexOf(cls)) > -1) {
			classNames.splice(index, 1);
		}
		element.className = classNames.join(' ');
		return element
	},
	bind: function(element, eventType, fn) {
		if (document.addEventListener) {
			element.addEventListener(eventType, fn, false);
		} else if (document.attachEvent) {
			element.attachEvent('on' + eventType, fn);
		}
		return element;
	},
	unbind: function(element, eventType, fn){
		if (document.removeEventListener) {
			element.removeEventListener(eventType, fn, false);
		} else if (document.detachEvent) {
			element.detachEvent('on' + eventType, fn);
		}
		return element;
	}
}
export default T