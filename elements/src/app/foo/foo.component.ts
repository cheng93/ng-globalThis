import { Component, OnInit } from '@angular/core';
import * as dateFns from 'date-fns';
@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css',
})
export class FooComponent implements OnInit {
  ngOnInit(): void {
    const bla = {
      ...dateFns,
    };
    Object.keys(bla).forEach((k) => console.log(k));
    console.log((globalThis as any).ng.ɵcompilerFacade);
  }
}
