import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


// tslint:disable-next-line: deprecation
  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
   
    this.aplicarCheck (link);

    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck( link: any ) {
  
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ){
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarCheck() {

    const selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for ( const ref of selectores ){
      if ( ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }

  }

}
