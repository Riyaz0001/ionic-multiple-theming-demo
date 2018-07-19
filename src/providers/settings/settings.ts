import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SettingsProvider {

    private theme: BehaviorSubject<string>;

    constructor(public http: HttpClient) {
        let tName = localStorage.getItem('currentTheme');
        if(tName != null ) 
            this.theme = new BehaviorSubject(tName);
         else 
            this.theme = new BehaviorSubject('light-theme');
    }

    
    setupCurrentTheme(val) {
        localStorage.setItem('currentTheme', val);
        this.theme.next(val);
    }

    getCurrentTheme() {
        return this.theme.asObservable();
    }


}
