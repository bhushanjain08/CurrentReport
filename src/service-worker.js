importScripts('./ngsw-worker.js');

self.addEventListener('sync', (event) => {
  if (event.tag === 'post-data') {
    // call method
   // event.waitUntil(getDataAndSend());
   event.waitUntil(getAndSendData());

  }
});

/*
function addData(data) {

  let obj = {
    body: "body 7",
    category: "Crime",
    image: "url",
    headline: "Theft",
    video: "url",
    userId: "7",
    userName: "Mike"
  };

  fetch('https://reporter-90253.firebaseio.com/reports.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());

}
*/

function getAndSendData() {
  let db;
  const request = indexedDB.open('reporter-db');
  request.onerror = (event) => {
    console.log('Please allow Reporter app to use IndexedDB.');
  };
  request.onsuccess = (event) => {
    db = event.target.result;
    getData(db);
  };
}

function getData(db) {
  const transaction = db.transaction(['report-store']);
  const objectStore = transaction.objectStore('report-store');
  const request = objectStore.get('reports');
  request.onerror = (event) => {
    // Handle errors!
  };
  request.onsuccess = (event) => {
    // Do something with the request.result!
    addData(request.result);
   // console.log('The report is ' + request.result);
  };

  
function addData(reportsData) {
  //indexDb
  console.log("service-worker addData reports", reportsData)
  let obj = {
    reports: reportsData,
  };
  console.log("service-worker addData object ", JSON.stringify(obj))

  fetch('https://reporter-90253.firebaseio.com/reports.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: reportsData,
  })
    .then(() => Promise.resolve())
    .catch(() => Promise.reject());
}
}

