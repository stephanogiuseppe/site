import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    cursos: any = [
        { id: 1, nome: 'Angular'},
        { id: 2, nome: 'Java'}
    ];

    constructor() { }

    ngOnInit() {
    }

}
