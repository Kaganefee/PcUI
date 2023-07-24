import { Component, Input, OnInit } from '@angular/core';
import { image } from '../models/image';
import { ImageService } from '../services/image.service';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers:[ImageService]
})
export class ImageComponent implements OnInit {
  imgs:image[]
  @Input() productId:number;
 
  constructor(private imageservice:ImageService) { }

  ngOnInit() {
    this.imageservice.getimagesbypcid(this.productId).subscribe(
      (response: any) => {
        if (Array.isArray(response.data)) {
          this.imgs = response.data.map(item => {
            return {
              data: { ...item },
              success: { ...response.success },
              message: { ...response.message }
            };
          });
        } else {
          console.error('Error: Result is not an array.', response);
        }
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
