import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError,map,tap} from 'rxjs/operators';
import { ICases } from "./dCases";


@Injectable({
    providedIn:'root'
})

export class DengueService{

    private caseUrl = 'api/cases/cases.json';

    constructor(private http:HttpClient){}

    getCases():Observable<ICases[]>{
    return this.http.get<ICases[]>(this.caseUrl).pipe(
        tap(data => console.log('All',JSON.stringify(data))),
        catchError(this.handleError)

        );
    }

    getCase(id: number): Observable<ICases | undefined> {
        return this.getCases()
          .pipe(
            map((products: ICases[]) => products.find(p => p.productId === id))
          );
      }

    private handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if(err.error instanceof ErrorEvent)
    {
        errMessage = `An error occurred ${err.error.message}`;
    }
    else{
        errMessage = `server returned code ${err.status}, error message is: ${err.message}`;
    }
    console.log(errMessage);
       return throwError(errMessage) 
}
}