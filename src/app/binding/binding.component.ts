import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  
})
export class BindingComponent implements OnInit {
ngOnInit(): void {
  
}

titre: string ="apprendre le data binding dans angular 10";
status :boolean= false;
nom : string ="rayen jabri";

changerTitre(){
  this.titre ="data binding";
}
}
