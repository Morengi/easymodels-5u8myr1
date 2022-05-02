import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimeLineComponent implements OnInit {
  ngOnInit() {}

  timeLine_Nodes: timeNode[] = [];

  addTimeNode(timeNode, card) {
    timeNode.timeLine_Nodes.push({
      user: 'придумаем',
      card_name: card.name,
      date: card.date,
    });

    console.log(timeNode.user, timeNode.card_name, timeNode.date);
  }
}

type timeNode = {
  user: string;
  card_name: string;
  date: number;
};
