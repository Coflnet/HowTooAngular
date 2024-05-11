import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-esc',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragHandle, CommonModule, MatIconModule],
  templateUrl: './esc.component.html',
  styleUrl: './esc.component.scss'
})
export class ESCComponent {
  countries = ["1 | Schweden: Marcus & Martinus - \"Unforgettable\"",
    "2 | Ukraine: Alyona Alyona & Jerry Heil - \"Teresa & Maria\"",
    "3 | Deutschland: Isaak - \"Always On The Run\"",
    "4 | Luxemburg: Tali - \"Fighter\"",
    "5 | Niederlande: Joost Klein - \"Europapa\"",
    "6 | Israel: Eden Golan - \"Hurricane\"",
    "7 | Litauen: Silvester Belt - \"Luktelk\"",
    "8 | Spanien: Nebulossa - \"Zorra\"",
    "9 | Estland: 5Miinust und Puuluup - \"(Nendest) narkootikumidest ei tea me (küll) midagi\"",
    "10 | Irland: Bambie Thug - \"Doomsday Blue\"",
    "11 | Lettland: Dons - \"Hollow\"",
    "12 | Griechenland: Marina Satti - \"Zari\"",
    "13 | Großbritannien (UK): Olly Alexander - \"Dizzy\"",
    "14 | Norwegen: Gåte - \"Ulveham\"",
    "15 | Italien: Angelina Mango - \"La noia\"",
    "16 | Serbien: Teya Dora - \"Ramonda\"",
    "17 | Finnland: Windows95man - \"No Rules\"",
    "18 | Portugal: Iolanda - \"Grito\"",
    "19 | Armenien: Ladaniva - \"Jako\"",
    "20 | Zypern: Silia Kapsis - \"Liar\"",
    "21 | Schweiz: Nemo - \"The Code\"",
    "22 | Slowenien: Raiven - \"Veronika\"",
    "23 | Kroatien: Baby Lasagna - \"Rim Tim Tagi Dim\"",
    "24 | Georgien: Nutsa Buzaladze - \"Fire Fighter\"",
    "25 | Frankreich: Slimane - \"Mon amour\"",
    "26 | Österreich: Kaleen - \"We Will Rave\""];

  constructor() {
    var stored = localStorage.getItem('countries');
    if (stored) {
      this.countries = JSON.parse(stored);
    }
  }

  ngOnInit() {
    
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
    localStorage.setItem('countries', JSON.stringify(this.countries));
  }
}

// javascript get inner text of all matches css selector .teaserpadding>h2>a as array from https://www.eurovision.de/teilnehmer/index.html
/*let nodes = document.querySelectorAll('.teaserpadding>h2>a');
let arr = Array.from(nodes);
JSON.stringify(arr.map(node => node.innerText));*/
