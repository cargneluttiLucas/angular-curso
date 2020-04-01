import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperCapital } from './upper-capital.pite';
// Component

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      UpperCapital
    ],
    exports: [
      UpperCapital
    ],
    providers: []
})
export class PipesModule {}
