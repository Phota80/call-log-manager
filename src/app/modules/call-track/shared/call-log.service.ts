import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CallData } from './call-data';


@Injectable({
  providedIn: 'root'
})
export class CallLogService {
  private apiUrl = '/api/calldata/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  constructor(private http: HttpClient,) { }

  getCallData(): Observable<any> {
    return this.http.get<CallData[]>(this.apiUrl)
  }
  /* GET calls whose caller contains search text */
  searchCallData(searchTxt: string): Observable<CallData[]> {
    if (!searchTxt.trim()) {
      // if not search text, return empty  array.
      return of([]);
    }
    return this.http.get<CallData[]>(`${this.apiUrl}/?caller=${searchTxt}`).pipe(
      tap(x => x.length ?
         console.log(`found matching "${searchTxt}"`):
         console.log(`No matching "${searchTxt}"`)
         ),
        
      catchError(this.handleError<CallData[]>('searchCallData', []))
    );
  }
   /** POST: add a new hero to the server */
   addCallLog(calldata: CallData): Observable<CallData> {
    return this.http.post<CallData>(this.apiUrl, calldata, this.httpOptions).pipe(
      tap((newData: CallData) => console.log(`added w/ id=${newData.id}`)),
      catchError(this.handleError<CallData>('add'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
