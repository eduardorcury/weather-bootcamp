import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './container/home/home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DetailedWeatherComponent } from 'src/app/shared/components/detailed-weather/detailed-weather.component';
import { UnitSelectorComponent } from './container/unit-selector/unit-selector.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePage, 
    CurrentWeatherComponent, 
    UnitSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule
  ]
})
export class HomeModule { }
