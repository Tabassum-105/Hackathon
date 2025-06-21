import { Component, OnInit } from '@angular/core';
import { DemoData } from './services/demo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected title = 'Hackathon-Demo';
  constructor(private demoDataService: DemoData) {
  }

  ngOnInit(): void {
    this.demoDataService.getData().subscribe((res)=> {
      console.log(res);
      
    })
  }
}
