import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './dengue-cases-details.component.html',
  styleUrls: ['./dengue-cases-details.component.css']
})
export class DengueCasesDetailsComponent implements OnInit {
  pageTitle:string = 'case Details';
  
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle +=` ${id} `
  }

  onBack():void{
    this.router.navigate(['/cases'])
   }

}
