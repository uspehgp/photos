import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../photos.service";

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})

export class PhotoShowComponent implements OnInit {

  photoUrl: string = '';

  constructor(private service: PhotosService) {
    this.updatePhoto()
  }


  ngOnInit(): void {
  }

  updatePhoto() {
    return this.service.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular
    })
  }

  onClick() {
    this.updatePhoto()
  }
}
