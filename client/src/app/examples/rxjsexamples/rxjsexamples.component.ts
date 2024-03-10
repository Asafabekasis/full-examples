import { Component, OnInit } from '@angular/core';
import {
  Subject,
  combineLatest,
  concat,
  concatAll,
  concatMap,
  endWith,
  exhaustAll,
  exhaustMap,
  fromEvent,
  interval,
  map,
  mergeAll,
  of,
  switchAll,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  timer,
  zip,
} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { GeneralService } from 'src/app/services/general.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-rxjsexamples',
  templateUrl: './rxjsexamples.component.html',
  styleUrls: ['./rxjsexamples.component.scss'],
})
export class RxjsexamplesComponent implements OnInit {
  public show: { [key: string]: boolean } = {};
  public colors = ['red', 'blue', 'yellow', 'orange', 'green'];
  public selectedColor;
  public condition: boolean = true;
  public behaviorSubjectExampleResult;
  public stopBoolean = new Subject();

  constructor(
    public _general: GeneralService,
    public _subject: SubjectService,
    public _api: ApiService
  ) {
    this._subject.behaviorSubjectExample.subscribe((res) => {
      console.log(res);
      this.behaviorSubjectExampleResult = res;
    });
  }

  public combinedTimers;

  public concatExample;

  public getSomething;

  // public fromEventExample = fromEvent(document, 'click').pipe(
  //   tap(() => console.log('click fromEvent no subscribe '))
  // );

  public numbers = interval(1000);
  public takeFourNumbers = this.numbers.pipe(take(4));

  ngOnInit(): void {
    // RxJS v6+

    const source$ = of('Hello', 'Friend');

    source$
      // emit on completion
      .pipe(endWith('Goodbye', 'Friend'))
      // 'Hello', 'Friend', 'Goodbye', 'Friend'
      .subscribe((val) => console.log(val));

    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);

    zip(age$, name$, isDev$)
      .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));

    //======>
   const x = this._api
      .getComplex()
      .pipe
      // switchAll(),
      // map(ob=>{return ob.color = 'red'}),
      ()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log('error occurd', err);
        },
        complete: () => {
          console.log(' concatAll Complited');
        },
      });

      setTimeout(() => {
        x.unsubscribe()
      }, 6000);

    //======>

    // //======>
    // this._api
    //   .getProducts()
    //   .pipe(
    //     mergeAll(),
    //     tap((res) => {
    //       if (res.color === 'blue') {
    //         console.log('found', res);
    //       }
    //     })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('mergeAll Complited');
    //     },
    //   });
    // //======>

    // //======>
    // this._api
    //   .getProducts()
    //   .pipe(
    //     switchAll(),
    //     tap((res) => {
    //       if (res.color === 'blue') {
    //         console.log('found', res);
    //       }
    //     })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('switchAll Complited');
    //     },
    //   });
    // //======>

    // //======>
    // this._api
    //   .getProducts()
    //   .pipe(
    //     exhaustAll(),
    //     tap((res) => {
    //       if (res.color === 'blue') {
    //         console.log('found', res);
    //       }
    //     })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //     complete: () => {
    //       console.log('exhaustAll Complited');
    //     },
    //   });
    // //======>

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(exhaustMap(() => interval(1000).pipe(take(5))));
    // result.subscribe((x) => console.log(x));

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))));
    // result.subscribe((x) => console.log(x));

    //=============================================================================================>

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map(() => interval(1000).pipe(take(4))));
    // const firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe((x) => console.log(x));

    //=============================================================================================>

    const timerInerval = interval(1000).pipe(take(2));
    concat(timerInerval, timerInerval); // concatenating the same Observable!
    // .subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('...and it is done!')
    // });

    //=============================================================================================>

    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));
    this.concatExample = concat(timer1, timer2, timer3);
    this.concatExample.subscribe({
      // next: (x) => {
      //   console.log('Next concat: ', x);
      // },
      // error: (e) => {
      //   console.log('error concat');
      // },
      // complete: () => {
      //   console.log('completed concat');
      // },
    });

    // const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
    // const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
    // this.combinedTimers = [firstTimer, secondTimer]
    // combineLatest(this.combinedTimers).subscribe((value) => console.log(value));

    this.takeFourNumbers.subscribe({
      // next: (x) => {
      //   console.log('Next take: ', x);
      // },
      // error: (e) => {
      //   console.log('error take');
      // },
      // complete: () => {
      //   console.log('completed take');
      // },
    });

    // this.fromEventExample.pipe(takeUntil(this.stopBoolean)).subscribe({
    //   next: (res) => {
    //     console.log('clicked with subscribe to fromEvent');

    //     setTimeout(() => {
    //       this.stopBoolean.next('');
    //     }, 5000);
    //   },
    //   error: (err) => {},
    //   complete: () => {
    //     console.log('second subscribe complete');
    //   },
    // });
  }

  stopTakeUntill() {
    this._general.subjectExample.next('');
  }

  stopStartTakeWhile() {
    this.condition = !this.condition;
  }

  startSubjectHighlight() {
    interval(1000)
      .pipe(
        takeUntil(this._general.subjectExample),
        takeWhile(() => this.condition),
        tap(() => console.log('interval start'))
      )
      .subscribe(() => {
        this.selectedColor =
          this.colors[Math.floor(Math.random() * this.colors.length)];
        this._general.highlightSubject.next(this.selectedColor);
      });

    setTimeout(() => {
      this.condition = false;
    }, 100000);
  }
}
