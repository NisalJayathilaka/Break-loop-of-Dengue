import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICases } from './dCases';
import { DengueService } from './dCases.service';

@Component({
  templateUrl: './dengue-cases-details.component.html',
  styleUrls: ['./dengue-cases-details.component.css']
})
export class DengueCasesDetailsComponent implements OnInit {
  pageTitle:string = 'case Details';
  errorMessage='';
  cases:ICases|undefined;
  
  constructor(private route:ActivatedRoute,private router: Router, private dengueService:DengueService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.pageTitle +=` ${id} `
    if (id) {
      this.getCase(id);
    }
    
  }

  getCase(id: number): void {
    this.dengueService.getCase(id).subscribe({
      next: cases => this.cases = cases,
      error: err => this.errorMessage = err
    });
  }

  onBack():void{
    this.router.navigate(['/cases'])
   }

}
