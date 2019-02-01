import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/service/miembros.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  members: any = null;

  constructor(private miembrosService: MiembrosService) { }

  ngOnInit() {
    this.miembrosService.getData().subscribe(
      (miembros) => {
        this.members = miembros;
      });
  }
}
