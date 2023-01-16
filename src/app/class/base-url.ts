import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  
  };
export class BaseUrl {
  url = "http://localhost:8282/api/";
  httOptions = httpOptions;
}
