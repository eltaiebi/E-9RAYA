import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagesPageRoutingModule } from './messages-routing.module';

import { MessagesPage } from './messages.page';
import { MessageDividerComponent } from './components/message-divider/message-divider.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { UserMessageComponent } from './components/user-message/user-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagesPageRoutingModule
  ],
  declarations: [
    MessagesPage,
    UserMessageComponent,
    MyMessageComponent,
    MessageDividerComponent,
  ]
})
export class MessagesPageModule {}
