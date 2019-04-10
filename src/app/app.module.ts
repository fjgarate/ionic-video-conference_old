import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { OpenViduVideoComponent } from './ov-video.component';
import { UserVideoComponent } from './user-video.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoRoomComponent } from './video-room/video-room.component';
import { ConversationComponent } from './conversation/conversation.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
    declarations: [AppComponent, UserVideoComponent, OpenViduVideoComponent, LoginComponent, VideoRoomComponent, ConversationComponent, DashboardComponent],
    entryComponents: [],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        AndroidPermissions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
