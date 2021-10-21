import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''

  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    console.log()
    this.name=this.route.snapshot.params['name'];
  }

  backToLogin(){
    console.log("Loggedout");
    this.router.navigate(['login']);
  }

}
