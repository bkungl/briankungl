import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  /*update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }*/

  /*delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  */
    
  findByTitle(title): Observable<any> {
    console.log('fix in blog.service.ts');
    return this.http.get(`${baseUrl}?title=${title}`);
  }
    
  findAllPublished(): Observable<any> {
      console.log('fix in blog.service.ts');
      return this.http.get(baseUrl);
  }
}
