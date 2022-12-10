import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"
import { Location } from '@angular/common'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name : string = ""
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  acceptsReadMe:  boolean = false
  subscribeToNewsLetters: boolean = false
  log: string=""
  waitingForResponse: boolean = false

  constructor(private http: HttpClient,
              //private accountService: AccountService,
             // private messageService: MessageService,
              private route: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Validate form data
    if (!this.email || !this.password) {
      // Form is invalid, show an error message
      return;
    }
    // Form is valid, send form data to the server
    this.http.post('/register', {
      email: this.email,
      password: this.password
    }).subscribe(response => {
      // Handle the response from the server
    });

  }
  register() {
    if (!this.waitingForResponse) {
      this.log = ""
      this.registrationLogic()
    }
  }
  back() {
    this.location.back()
  }
  private registrationLogic() {
    if (!this.inputsAreEmpty()) {
      if (this.acceptsReadMe) {
        if (this.password === this.passwordConfirmation) {
          this.waitingForResponse = true
          this.accountService.register(this.name, this.email, this.password, this.subscribeToNewsLetters)
            .subscribe(
              () => {
                this.messageService.add({severity: 'success', summary: 'Sikeres regisztráció!'})
                this.waitingForResponse = false
                this.route.navigateByUrl('/login')},
              () => {
                this.messageService.add({severity: 'error', summary: 'Sikertelen regisztráció!'})
                this.waitingForResponse = false
              })
        } else {
          this.log = "A jelszavak nem egyeznek!"
        }
      } else {
        this.log = "El kell fogadnod a felhasználási feltételeket."
      }
    } else {
      this.log = "Az adatok nem lehetnek üresek"
    }
  }

  /**
   * Checks if any of the inputs are empty on the register form and returns false on missing input
   * @returns bool value
   */
  private inputsAreEmpty(): boolean {
    return this.name.trim().length === 0 || this.email.trim().length === 0 || this.password.trim().length === 0
  }

}
