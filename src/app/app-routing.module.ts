import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ConversationComponent } from './conversation/conversation.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';

const appRoutes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
   { path: 'videoconf', component: VideoRoomComponent, canActivate: [AuthGuard] },
  { path: 'conversations', component: ConversationComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '*', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
