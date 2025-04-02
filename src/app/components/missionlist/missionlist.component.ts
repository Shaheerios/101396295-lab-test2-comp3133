import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Mission } from '../../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.spacexService.getAllMissions().subscribe((data) => {
      this.missions = data;
    });
  }

  filterMissions(year: string): void {
    if (year) {
      this.spacexService.getMissionsByYear(year).subscribe((data) => {
        this.missions = data;
      });
    } else {
      this.loadAllMissions();
    }
  }
}
