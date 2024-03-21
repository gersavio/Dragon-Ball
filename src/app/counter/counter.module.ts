import { NgModule } from "@angular/core";
import { CounterComponent } from "./coponents/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent,
  ],
  exports: [
    CounterComponent,
  ]
})

export class CounterModule {
}
