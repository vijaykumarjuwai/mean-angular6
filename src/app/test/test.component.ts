import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
    tests: any;
    constructor(private api: ApiService) { }

    ngOnInit() {
      this.api.getBooks().subscribe(res => {
        console.log(res);
        this.tests = res;
      }, err => {
        console.log(err);
      });
    }
}
