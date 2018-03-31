import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menus: Menu[] = [
    { name: 'Beranda', url: '/beranda' },
    { name: 'Umum', url: '/umum' },
    { name: 'Matahari', url: '/matahari' },
    { name: 'Bulan', url: '/bulan' },
    { name: 'Daftar Konstanta', url: '/konstanta' },
    { name: 'Referensi', url: '/refs' },
    { name: 'Glosarium', url: '/glos' },
  ];
  constructor() { }

  ngOnInit() {
  }


}

export interface Menu {
  name: String;
  url: String;
}
