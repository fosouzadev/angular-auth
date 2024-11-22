import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string | null = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

}
