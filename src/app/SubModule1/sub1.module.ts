import { NgModule } from '@angular/core';
import { OneComp } from './one.component';
import { TwoComp } from './two.component';

@NgModule({
    declarations:[OneComp,TwoComp],
    exports: [OneComp,TwoComp]
})
export class SubModule1
{}