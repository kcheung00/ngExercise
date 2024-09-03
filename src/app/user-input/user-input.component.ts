import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.nodel';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment
    });

    console.log("user-input.component.ts - onSubmit()");
    console.log("Intial Investment = " + this.initialInvestment);
    console.log("Annual Investment = " + this.annualInvestment);
    console.log("Expected Return = " + this.expectedReturn);
    console.log("Durantion = " + this.duration);
  }
}
