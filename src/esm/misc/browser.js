/**
* Find the browser information (includes code from [this SO post](https://stackoverflow.com/a/18706818/14828697)).
*
* @since v2.12.0
* @category Misc
* @returns String
* @example
* getBrowser();
*/

const getBrowser = () => {
	if (typeof navigator === 'undefined') return undefined;
	const nAgt = navigator.userAgent;
	let verOffset, browser, version, nameOffset, ix, majorVersion;
	if ((verOffset = nAgt.indexOf('Opera')) != -1) {
		browser = 'Opera';
		version = nAgt.substring(verOffset + 6);
		if ((verOffset = nAgt.indexOf('Version')) != -1) {
			version = nAgt.substring(verOffset + 8);
		}
	}
	// Opera Next
	if ((verOffset = nAgt.indexOf('OPR')) != -1) {
		browser = 'Opera';
		version = nAgt.substring(verOffset + 4);
	}
	// Legacy Edge
	else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
		browser = 'Microsoft Legacy Edge';
		version = nAgt.substring(verOffset + 5);
	}
	// Edge (Chromium)
	else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
		browser = 'Microsoft Edge';
		version = nAgt.substring(verOffset + 4);
	}
	// MSIE
	else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
		browser = 'Microsoft Internet Explorer';
		version = nAgt.substring(verOffset + 5);
	}
	// Chrome
	else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
		browser = 'Chrome';
		version = nAgt.substring(verOffset + 7);
	}
	// Safari
	else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
		browser = 'Safari';
		version = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf('Version')) != -1) {
			version = nAgt.substring(verOffset + 8);
		}
	}
	// Firefox
	else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
		browser = 'Firefox';
		version = nAgt.substring(verOffset + 8);
	}
	// MSIE 11+
	else if (nAgt.indexOf('Trident/') != -1) {
		browser = 'Microsoft Internet Explorer';
		version = nAgt.substring(nAgt.indexOf('rv:') + 3);
	}
	// Other browsers
	else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
		browser = nAgt.substring(nameOffset, verOffset);
		version = nAgt.substring(verOffset + 1);
		if (browser.toLowerCase() == browser.toUpperCase()) {
			browser = navigator.appName;
		}
	}
	// trim the version string
	if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
	if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
	if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

	majorVersion = parseInt('' + version, 10);
	if (isNaN(majorVersion)) {
		version = '' + parseFloat(navigator.appVersion);
		majorVersion = parseInt(navigator.appVersion, 10);
	}

	return {
		'name': browser,
		'version': version,
		'majorVersion': majorVersion,
	};
};

export { getBrowser };
