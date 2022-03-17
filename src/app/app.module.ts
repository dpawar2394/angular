import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
    //  matdatepicer
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatMenuModule,
    MatSliderModule,
    CdkAccordionModule,
    DragDropModule,
    MatSlideToggleModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatNativeDateModule,
    BrowserAnimationsModule
    
    
    
  ],
  exports:[
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [MatFormFieldModule,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
