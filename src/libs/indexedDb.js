function idb() {
	return new Promise((resolve, reject) => {
		if (!('indexedDB' in window)) {
			reject(new Error('indexedDB not supported'));
		}

		const request = window.indexedDB.open('todos', 1);

		request.onupgradeneeded = function(event) {
			const db = event.target.result;
			db.createObjectStore('todos', {autoIncrement: true});
			resolve(db);
		}

		request.onsuccess = function() {
			resolve(request.result);
		}

		request.onerror = function() {
			reject(new Error('Error openning db'));
		}
	});
}

export function getTodos() {
	return idb()
		.then(db => new Promise((resolve, reject) => {
			const objectStore = db.transaction(['todos']).objectStore('todos');
			const request = objectStore.openCursor();
			const data = [];

			request.onsuccess = function(event) {
				const cursor = event.target.result;

				if (cursor) {
					data.push({
						value: cursor.value,
						idbKey: cursor.key,
					})
					cursor.continue();
				} else {
					resolve(data);
				}
			}

			request.onerror = function() {
				resolve([]);
			}
		}))
		.catch(err => {
			console.error(err);
			return [];
		});
}

export function addTodo(newTodo) {
	return idb()
		.then(db => new Promise((resolve, reject) => {
			const objectStore = db.transaction(['todos'], 'readwrite').objectStore('todos');
			const request = objectStore.add(newTodo);

			request.onsuccess = function() {
				resolve(request.result);
			}

			request.onerror = function() {
				resolve(null);
			}
		}))
		.catch(err => {
			console.error(err);
			return null;
		});
}

export function removeTodo(idbKey) {
	return idb()
		.then(db => new Promise((resolve, reject) => {
			const objectStore = db.transaction(['todos'], 'readwrite').objectStore('todos');
			const request = objectStore.delete(idbKey);

			request.onsuccess = function() {
				resolve(request.result);
			}

			request.onerror = function() {
				resolve(null);
			}
		}))
		.catch(err => {
			console.error(err);
			return null;
		});
}
