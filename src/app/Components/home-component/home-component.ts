import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DemoData } from '../../services/demo-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  constructor(private demoDataService: DemoData, private fb: FormBuilder, private router: Router) {
  }

   
  ngOnInit(): void {
    // this.demoDataService.getProducts().subscribe((res)=> {
    //   console.log(res);
    //   this.products = res;
      
    // })
  }

  OpenDetails() {
    this.router.navigate(['/order'])
  }
}
