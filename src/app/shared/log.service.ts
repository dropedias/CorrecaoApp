import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogService {   

  readonly urlApiBase = "http://localhost:52903/api";

  constructor(private http : HttpClient) { }

  // Chamada de um post para um método na Api com o atributo [FromBody]
  writeLog(logEntry : string){    
    return this.http.post(this.urlApiBase + "/Log/",
      {
        key: logEntry
      },
      {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }
}
