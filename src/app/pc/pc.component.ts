import { Component, OnInit } from '@angular/core';
import { pc } from '../models/pc';
import { PcService } from '../services/pc.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css'],
  providers: [PcService],
})
export class PcComponent implements OnInit {
  pcs: pc[];
  

  constructor(private pcService: PcService) {}

  ngOnInit() {
    this.pcService.getPcs().subscribe(
      (response: any) => {
        if (Array.isArray(response.data)) {
          this.pcs = response.data.map(item => {
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
  

