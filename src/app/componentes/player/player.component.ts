import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Output() event = new EventEmitter();
  @Output() event2 = new EventEmitter();

  borrar(){
    this.event.emit('holaa2222')
  }
  favorito(){
    this.event2.emit('holaa2222')
  }


  @Input() jugador? : any;
  constructor() { }

  ngOnInit(): void {
  }

}
