import { Component, OnInit } from "@angular/core";
import { ICases } from "./dCases";
import { DengueService } from "./dCases.service";

@Component({
    selector:"pm-dengueCases",
    templateUrl:"./dengueCase-list.components.html",
    styleUrls:["./dengueCase-list.components.css"]
})

export class DenguelistComponent implements OnInit{
   dangueCases:string="Dengue Cases";
   imageWidh:number=50;
   imageMargin:number=2;
   showImage:boolean=false;
   errorMessage:string='';

   private _listFilter:string=' ';

   get listFilter():string{
       return this._listFilter;
   }

   set listFilter(value:string)
   {
      this._listFilter=value;
      console.log('in setter', value);
      this.filterCases = this.performeFilter(value);
   }

   filterCases:ICases[]=[];

   ceases:ICases[] =[];

   constructor(private dngueService:DengueService){}

   performeFilter(filterBy:string):ICases[]
 {
  filterBy = filterBy.toLocaleLowerCase();
  return this.ceases.filter((cases:ICases)=>
  cases.productName.toLocaleLowerCase().includes(filterBy));
 }
toggleImage():void{
    this.showImage= !this.showImage;
}

ngOnInit(): void {
       
  this.dngueService.getCases().subscribe({
      next: products=>{
          
          this.ceases=products;
          this.filterCases = this.ceases;
      },

      error:err => this.errorMessage =err
  });
}

onRatingClicked(message:string):void{
  this.dangueCases = ''+ message;
}
}
