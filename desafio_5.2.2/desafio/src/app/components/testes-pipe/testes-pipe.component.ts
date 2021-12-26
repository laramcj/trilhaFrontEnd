import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-pipe',
  templateUrl: './testes-pipe.component.html',
  styleUrls: ['./testes-pipe.component.scss']
})
export class TestesPipeComponent implements OnInit {

  data1 = new Date('2021-10-21T10:00:00.000');

  constructor() { }

  ngOnInit(): void {
  }

}
