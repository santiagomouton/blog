import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public storageService: StorageService ) { }

  ngOnInit(): void {
  }
  

  myProfileUrl(){
    return ( 'profile/' + sessionStorage.getItem('session') )
  }


}
