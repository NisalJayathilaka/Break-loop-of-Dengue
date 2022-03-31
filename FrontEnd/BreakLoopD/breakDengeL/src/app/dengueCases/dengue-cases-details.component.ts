import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICases } from './dCases';

@Component({
  templateUrl: './dengue-cases-details.component.html',
  styleUrls: ['./dengue-cases-details.component.css']
})
export class DengueCasesDetailsComponent implements OnInit {
  pageTitle:string = 'case Details';
  cases:ICases|undefined;
  
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle +=` ${id} `
    this.cases=
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/dengue1.jpeg"
      }
    
  }

  onBack():void{
    this.router.navigate(['/cases'])
   }

}
