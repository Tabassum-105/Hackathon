import { Component, OnInit } from '@angular/core';
import { DemoData } from '../../services/demo-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IShares } from '../../model/portfolio.model';

@Component({
  selector: 'app-order-entry-component',
  standalone: false,
  templateUrl: './order-entry-component.html',
  styleUrl: './order-entry-component.scss'
})
export class OrderEntryComponent implements OnInit {
  public funds: number = 0;
  public fundForm: FormGroup;
  transactionTypes = ['Buy', 'Sell'];
  sharePrice$!: Subscription;
  latestPrice = 100;
  isShareAvailable = false;
  lowBalance = false;
  constructor(private demoDataService: DemoData, private fb: FormBuilder) {
    this.fundForm = this.fb.group({
      fundName: ['', Validators.required],
      transactionType: ['', Validators.required],
      quantity: [
        '',
        [Validators.required, Validators.min(1)]
      ],
      orderValue: [{ value: '', disabled: true }, Validators.required]
    });

    this.getLatestSharePrices();
  }
  ngOnInit(): void {
    this.getFunds();
    this.fundForm.get('quantity')?.valueChanges.subscribe(qty => {
      const price = this.latestPrice; // Store price in a class variable
      this.fundForm.get('orderValue')?.setValue((qty * price).toFixed(2));
    });
  }

  public getFunds() {
    this.demoDataService.getFunds().subscribe({
      next: (res) => {
        this.funds = res?.balanceFunds;
      },
      error: (err) => {

        console.error('Error occurred:', err.message);
        return 0;
      }
    });
  }

  onPlaceOrder() {
    this.lowBalance = false;

    if (this.fundForm.valid && this.isShareAvailable && this.checkBalanceFunds()) {
      const payload = this.fundForm.getRawValue(); // get values including disabled fields
      console.log(payload);

      this.demoDataService.placeOrder(payload).subscribe({
        next: (res) => {
          console.log('Order submitted:', res);
          alert('Order submitted successfully!');
        },
        error: (err) => {
          console.error('Error submitting order:', err);
          alert('Failed to submit order.');
        }
      });
    } else {
      this.fundForm.markAllAsTouched();
      if(!this.checkBalanceFunds()){
        this.lowBalance = true;
      }
    }
  }


  getLatestSharePrices() {
    this.sharePrice$ = this.demoDataService.getSharePrices().subscribe((price) => {
      this.latestPrice = price;
      const quantity = this.fundForm.get('quantity')?.value || 0;
      const orderValue = price * quantity;

      // Update orderValue field
      this.fundForm.get('orderValue')?.setValue(orderValue.toFixed(2));
    });
  }

  ngOnDestroy() {
    this.sharePrice$?.unsubscribe();
  }

  checkExistingFundName() {
    this.demoDataService.getShareList().subscribe({
      next: (res: IShares[]) => {
        console.log("fetching Shares: ", res);
        
        const name = this.fundForm.get('fundName')?.value || '';
        this.isShareAvailable = !!res.find((share) => share.name.toLowerCase() === name.trim().toLowerCase())

      },
      error: (err) => {
        console.error('Error getting shares:', err);
      }
    })

  }

  checkBalanceFunds(): boolean {
    console.log(this.fundForm.get('orderValue')?.value);
    console.log(this.funds);
    
    if(+this.fundForm.get('orderValue')?.value > +this.funds) {
      return false;
    }
    return true;
  }
}
