import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    )
  };
  const httpOptions2 = {
    headers:new HttpHeaders(
      {
        'Content-Type': 'application/JSON',
      }
    )
  }
export class BaseUrl {
    url = "http://localhost:8282/api/";
    httOptions = httpOptions;
    httOptionsPost = httpOptions2;
}
