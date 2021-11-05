import { release, arch } from 'os';
import { getBrowser } from './browser.js';
/**
* Find the OS information (includes code from [this SO post](https://stackoverflow.com/a/18706818/14828697)). (PS This is nowhere as polished as libraries dedicated to only detecting the OS details)
*
* @since v2.11.0
* @category Misc
* @returns String
* @example
* await getOS();
*/

const getOS = async () => {
	if (typeof navigator !== 'undefined') {
		const nAgt = navigator.userAgent;
		const {
			version,
			name: browser,
		} = getBrowser();
		const nVer = navigator.appVersion;
		let os = 'Unknown OS';
		const clientStrings = [
			{
				s: 'Windows 10',
				r: /(Windows 10.0|Windows NT 10.0)/,
			},
			{
				s: 'Windows 8.1',
				r: /(Windows 8.1|Windows NT 6.3)/,
			},
			{
				s: 'Windows 8',
				r: /(Windows 8|Windows NT 6.2)/,
			},
			{
				s: 'Windows 7',
				r: /(Windows 7|Windows NT 6.1)/,
			},
			{
				s: 'Windows Vista',
				r: /Windows NT 6.0/,
			},
			{
				s: 'Windows Server 2003',
				r: /Windows NT 5.2/,
			},
			{
				s: 'Windows XP',
				r: /(Windows NT 5.1|Windows XP)/,
			},
			{
				s: 'Windows 2000',
				r: /(Windows NT 5.0|Windows 2000)/,
			},
			{
				s: 'Windows ME',
				r: /(Win 9x 4.90|Windows ME)/,
			},
			{
				s: 'Windows 98',
				r: /(Windows 98|Win98)/,
			},
			{
				s: 'Windows 95',
				r: /(Windows 95|Win95|Windows_95)/,
			},
			{
				s: 'Windows NT 4.0',
				r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
			},
			{
				s: 'Windows CE',
				r: /Windows CE/,
			},
			{
				s: 'Windows 3.11',
				r: /Win16/,
			},
			{
				s: 'Android',
				r: /Android/,
			},
			{
				s: 'Open BSD',
				r: /OpenBSD/,
			},
			{
				s: 'Sun OS',
				r: /SunOS/,
			},
			{
				s: 'Chrome OS',
				r: /CrOS/,
			},
			{
				s: 'Linux',
				r: /(Linux|X11(?!.*CrOS))/,
			},
			{
				s: 'iOS',
				r: /(iPhone|iPad|iPod)/,
			},
			{
				s: 'Mac OS X',
				r: /Mac OS X/,
			},
			{
				s: 'Mac OS',
				r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
			},
			{
				s: 'QNX',
				r: /QNX/,
			},
			{
				s: 'UNIX',
				r: /UNIX/,
			},
			{
				s: 'BeOS',
				r: /BeOS/,
			},
			{
				s: 'OS/2',
				r: /OS\/2/,
			},
			{
				s: 'Search Bot',
				r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
			},
		];
		for (let id = 0; id < clientStrings.length; id++) {
			var cs = clientStrings[id];
			if (cs.r.test(nAgt)) {
				os = cs.s;
				break;
			}
		}

		let osVersion = 'Unknown OS Version';

		if (/Windows/.test(os)) {
			osVersion = /Windows (.*)/.exec(os)[1];
			os = 'Windows';
		}

		switch (os) {
		case 'Mac OS':
		case 'Mac OS X':
		case 'Android':
			/* eslint-disable no-useless-escape */
			osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
			/* eslint-enable no-useless-escape */
			break;

		case 'iOS':
			osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
			osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
			break;
		}
		// console.log((browser === 'Chrome' && parseFloat(version) >= 95) || (browser === 'Microsoft Edge' && parseFloat(version) >= 94), parseFloat(version), browser);
		if((browser === 'Chrome' && parseFloat(version) >= 95) || (browser === 'Microsoft Edge' && parseFloat(version) >= 94) || browser === 'Opera') {
			return navigator.userAgentData.getHighEntropyValues(['platformVersion'])
				.then(ua => {
					if (navigator.userAgentData.platform === 'Windows') {
						const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
						if (majorPlatformVersion >= 13) {
							return 'Windows 11 or later';
						}
						else if (majorPlatformVersion > 0) {
							return 'Windows 10';
						}
						else {
							return 'Windows 8 or later';
						}
					}
				});
		}
		else {
			return os + ' ' + osVersion;
		}
	}
	if(typeof window === 'undefined') {
		return `${process.platform === 'win32' ? 'Windows' : process.platform} ${release} (${arch})`;
	}
};

export { getOS };
