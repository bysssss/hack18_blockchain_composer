/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { CowComponent } from './Cow/Cow.component';
import { BeefComponent } from './Beef/Beef.component';

import { FarmerComponent } from './Farmer/Farmer.component';
import { BrokerComponent } from './Broker/Broker.component';
import { RestaurantComponent } from './Restaurant/Restaurant.component';

import { AuctionComponent } from './Auction/Auction.component';
import { TradeComponent } from './Trade/Trade.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Cow', component: CowComponent },
  { path: 'Beef', component: BeefComponent },
  { path: 'Farmer', component: FarmerComponent },
  { path: 'Broker', component: BrokerComponent },
  { path: 'Restaurant', component: RestaurantComponent },
  { path: 'Auction', component: AuctionComponent },
  { path: 'Trade', component: TradeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
