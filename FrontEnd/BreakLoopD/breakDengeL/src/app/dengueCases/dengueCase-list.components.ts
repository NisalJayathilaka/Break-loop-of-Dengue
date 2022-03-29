import { Component } from "@angular/core";
import { ICases } from "./dCases";

@Component({
    selector:"pm-dengueCases",
    templateUrl:"./dengueCase-list.components.html",
    styleUrls:["./dengueCase-list.components.css"]
})

export class DenguelistComponent{
   dangueCases:string="Dengue Cases";
   imageWidh:number=50;
   imageMargin:number=2;
   listFilter:string='dengu';

   showImage:boolean=false;

   ceases:ICases[] =[ {

        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/dengue1.jpeg"
  },
  {

    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2021",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  }
];

toggleImage():void{
    this.showImage= !this.showImage;
}
}