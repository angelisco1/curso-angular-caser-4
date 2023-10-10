import { Component } from '@angular/core';
import { Subscription, filter, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  subscription: Subscription | null = null


  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(
        map((num: number) => {
          return num * 2
        }),
        filter((num: number) => {
          return num > 10
        }),
        take(3),
      )
      .subscribe((num: number) => {
        console.log(num)
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }

}
