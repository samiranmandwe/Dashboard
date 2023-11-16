import { Component } from '@angular/core';


@Component({
  selector: 'app-emi-aclculator',
  templateUrl: './emi-aclculator.component.html',
  styleUrls: ['./emi-aclculator.component.css']
})
export class EmiAclculatorComponent {

  loanAmount: number;
  interestRate: number;
  tenure: number;
  emi: number;

  calculateEMI() {
    const principal = this.loanAmount;
    const rateOfInterest = (this.interestRate / 100) / 12;
    const numberOfPayments = this.tenure * 12;

    this.emi = (principal * rateOfInterest) / (1 - Math.pow(1 + rateOfInterest, -numberOfPayments));
  }

}
