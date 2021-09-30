import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface UnsplashResponse{
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})


export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random/?client_id=0Dr90DlfuFZr3Cj4f0r-sHfINMLE5mbr9tCl1zdzWCI')
  }
}
