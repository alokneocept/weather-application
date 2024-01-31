import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  {
  signupData ={
    fname: '',
    lname: '',
    userid: '',
    password: '',
  }
  constructor(private weatherService: WeatherService) { }

  onSubmit() {
    this.weatherService.signUp(this.signupData).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
      },
      error: (error) => {
        console.error('Signup failed', error);
      }
    });
    
  
  }
}
