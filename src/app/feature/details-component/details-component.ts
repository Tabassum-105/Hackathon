import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-details-component',
  standalone: false,
  templateUrl: './details-component.html',
  styleUrl: './details-component.scss'
})
export class DetailsComponent implements OnInit, AfterViewInit{
 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];
  dataStream$ = new Subject<PeriodicElement[]>()
  
@ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource();

  constructor() {
    
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.data = this.dataToDisplay;
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.data = this.dataToDisplay;
  }
  ngOnInit(): void {
   
    console.log('here');
    this.dataStream$.subscribe((res: any[])=> {
      console.log('ada',res)
      this.dataSource.data = res;
    });
     this.dataStream$.next(ELEMENT_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
