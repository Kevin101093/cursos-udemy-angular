import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './pages/main-page.component';
import { ListComponent } from "./components/list/list.component";
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [MainComponent,ListComponent, CharacterComponent],
  imports: [
    CommonModule,
],
  exports:[MainComponent]
})
export class DbzModule { }
