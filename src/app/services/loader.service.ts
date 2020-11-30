import { Injectable } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private loadingBar: LoadingBarService) {}
 
  startLoading() {
    this.loadingBar.start();
  }
 
  stopLoading() {
    this.loadingBar.complete();
  }
}
