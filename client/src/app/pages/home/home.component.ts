import { Component, OnInit } from '@angular/core';
import {MainServiceService} from "../../main-service.service";
import {Router} from "@angular/router";

// import { Product } from '../../product';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [MainServiceService ]
})
export class HomeComponent implements OnInit {
  products={};
  constructor(private mainService : MainServiceService , private router:Router,private modalService: NgbModal) { }

  ngOnInit(){
    this.mainService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

    onSubmit(event){
    this.mainService.addProducts(event.productname,event.productdescription);
    window.location.reload()

    }
    delete(id){
      this.mainService.deleteProduct(id);
      window.location.reload();

    }
    update(id){
      console.log(id);
    }
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
