import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  year: string = '';
  @Output() filterByYear = new EventEmitter<string>();

  onFilter(): void {
    this.filterByYear.emit(this.year.trim());
  }
}