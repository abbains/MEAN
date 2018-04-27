import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class MainServiceService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {

  }
  getProducts(){
    return this.http.get('http://localhost:3000/api/showproducts');
  }
  addProducts(productname, productdescription){
    return this.http.post('http://localhost:3000/api/addproduct',{
      productname: productname,
      productdescription: productdescription
    }).subscribe( res => {
      console.log(res);
    });
  }
  deleteProduct(id:any){
    return this.http.delete(`http://localhost:3000/api/deleteproduct/${id}`,this.httpOptions).subscribe(res =>{
      console.log(res);
    } )
  }
  }



