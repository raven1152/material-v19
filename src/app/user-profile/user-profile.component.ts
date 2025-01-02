import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBoolValue, updateDateValue } from '../+state/app.actions';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { selectBoolValue, selectDateValue } from '../+state/app.selectors';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: false,

  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('boolValueControl') boolValueControl!: MatSlideToggle;
  @ViewChild('dateValueControl') dateValueControl!: ElementRef;
  public boolValue$!: Observable<boolean>;
  public dateValue$!: Observable<string | undefined>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.boolValue$ = this.store.select(selectBoolValue)
      .pipe(
        tap(boolValue => {
          console.log(boolValue);
        })
      );
    this.dateValue$ = this.store.select(selectDateValue)
      .pipe(
        tap(dateValue => {
          console.log(dateValue);
        })
      );
  }

  ngAfterViewInit(): void {
    console.log(this.boolValueControl);
  }

  click() {
    this.store.dispatch(updateBoolValue({ boolValue: this.boolValueControl.checked }));
    this.store.dispatch(updateDateValue({ dateValue: this.dateValueControl.nativeElement.value }));
  };
}
