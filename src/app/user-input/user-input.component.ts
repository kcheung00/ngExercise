import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.nodel';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService){

  }

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment()
    });

    // Optional Reset the UI back to 0 - demo signal set
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('10');
  
    console.log("user-input.component.ts - onSubmit()");
    console.log("Intial Investment = " + this.initialInvestment);
    console.log("Annual Investment = " + this.annualInvestment);
    console.log("Expected Return = " + this.expectedReturn);
    console.log("Durantion = " + this.duration);
  }
}
