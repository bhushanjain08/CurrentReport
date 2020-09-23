import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs/internal/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  constructor(private update: SwUpdate, private appRef: ApplicationRef) {
    console.log("OfflineService Reached")
    this.updateClient();
    this.checkUpdate();
  }


  updateClient() {
    if (!this.update.isEnabled) {
      console.log('Not Enabled');
      return;
    }
    this.update.available.subscribe((event) => {
      console.log('current', event.current, 'available', event.available);
      if (confirm('Update available for the app please conform.')) {
        this.update.activateUpdate().then(() => location.reload());
      }
    });

    this.update.activated.subscribe((event) => {
      console.log(`current`, event.previous, `available `, event.current);
    });
  }

  checkUpdate() {
    this.appRef.isStable.subscribe((isStable) => {
      if (isStable) {
        // const timeInterval = interval(8 * 60 * 60 * 1000);
        const timeInterval = interval(60000);

        timeInterval.subscribe(() => {
          this.update.checkForUpdate().then(() => console.log('looking for updates'));
          console.log('update checked');
          //this.updateClient();//
        });
      }
    });
  }

  backgroundSync() {
    console.log('backgroundSync');
    navigator.serviceWorker.ready
      .then((swRegistration) => swRegistration.sync.register('post-data'))
      .catch(console.log);
  }
}

