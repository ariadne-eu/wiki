/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ariadne-web1\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x68;',
			'icon-broadcast' : '&#x52;',
			'icon-mail' : '&#x6d;',
			'icon-file' : '&#x31;',
			'icon-upload' : '&#xe004;',
			'icon-twitter' : '&#xe008;',
			'icon-facebook' : '&#x66;',
			'icon-google-plus' : '&#x67;',
			'icon-feed' : '&#x72;',
			'icon-github' : '&#x74;',
			'icon-file-xml' : '&#x33;',
			'icon-libreoffice' : '&#x32;',
			'icon-file-pdf' : '&#x35;',
			'icon-file-openoffice' : '&#x36;',
			'icon-file-word' : '&#x37;',
			'icon-file-powerpoint' : '&#x38;',
			'icon-file-zip' : '&#x39;',
			'icon-yelp' : '&#xe011;',
			'icon-pinterest' : '&#xe012;',
			'icon-file-css' : '&#x34;',
			'icon-youtube' : '&#x79;',
			'icon-code' : '&#x78;',
			'icon-arrow-up' : '&#x5e;',
			'icon-arrow-right' : '&#x3e;',
			'icon-arrow-down' : '&#x5f;',
			'icon-arrow-left' : '&#x3c;',
			'icon-cancel' : '&#x58;',
			'icon-checkmark' : '&#x56;',
			'icon-star' : '&#x2a;',
			'icon-star-2' : '&#x2f;',
			'icon-attachment' : '&#x7e;',
			'icon-flag' : '&#x21;',
			'icon-upload-2' : '&#x40;',
			'icon-download' : '&#x2e;',
			'icon-upload-3' : '&#xe022;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};