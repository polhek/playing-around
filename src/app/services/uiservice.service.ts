import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiserviceService {
  private readonly _toggle = new BehaviorSubject<boolean>(false);
  public readonly showToggle$ = this._toggle.asObservable();

  toggleShow(): void {
    this._toggle.next(!this._toggle.value);
  }

  constructor() {}
}
