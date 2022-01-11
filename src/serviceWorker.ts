const isLocalhost = Boolean(
	window.location.hostname === 'localhost' ||
		// [::1] is the IPv6 localhost address.
		window.location.hostname === '[::1]' ||
		// 127.0.0.0/8 are considered localhost for IPv4.
		/^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})){3}$/.test(window.location.hostname)
);

type Config = {
	onSuccess?: (registration: ServiceWorkerRegistration) => void;
	onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		// The URL constructor is available in all browsers that support SW.
		const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
		if (publicUrl.origin !== window.location.origin) {
			return;
		}

		window.addEventListener('load', () => {
			const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

			if (isLocalhost) {
				checkValidServiceWorker(swUrl, config);
			} else {
				// Is not localhost. Just register service worker
				registerValidSW(swUrl, config);
			}
		});
	}
}

function registerValidSW(swUrl: string, config?: Config) {
	navigator.serviceWorker.register(swUrl).then(registration => {
		registration.addEventListener('updatefound', () => {
			const installingWorker = registration.installing;
			if (installingWorker == undefined) {
				return;
			}
			installingWorker.addEventListener('statechange', () => {
				if (installingWorker.state === 'installed') {
					if (navigator.serviceWorker.controller) {
						// Execute callback
						if (config && config.onUpdate) {
							config.onUpdate(registration);
						}
					} else if (config && config.onSuccess) {config.onSuccess(registration);}
				}
			});
		});
	});
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
	// Check if the service worker can be found. If it can't reload the page.
	fetch(swUrl, {
		headers: {'Service-Worker': 'script'},
	}).then(response => {
		// Ensure service worker exists, and that we really are getting a JS file.
		const contentType = response.headers.get('content-type');
		if (response.status === 404 || (contentType != undefined && !contentType.includes('javascript'))) {
			// No service worker found. Probably a different app. Reload the page.
			navigator.serviceWorker.ready.then(registration => {
				registration.unregister().then(() => {
					window.location.reload();
				});
			});
		} else {
			// Service worker found. Proceed as normal.
			registerValidSW(swUrl, config);
		}
	});
}

export function unregister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(registration => {
			registration.unregister();
		});
	}
}
