import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-career',
  templateUrl: './my-career.component.html',
  styleUrls: ['./my-career.component.scss']
})
export class MyCareerComponent implements OnInit {

  public itemsList: Object[] = [
    {
        title: 'Collapsible Group Item #1',
        description: 'Anim pariatur cliche reprehenderit, VHS.'
    },
     {
        title: 'Collapsible Group Item #2',
        description: 'Anim pariatur cliche reprehenderit, HS.'
    },
     {
        title: 'Collapsible Group Item #3',
        description: 'Anim pariatur cliche reprehenderit, enim eiusHS.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
