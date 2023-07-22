import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding:10px">
    <h2>Please select your pizza</h2>
    <div ngbRadioButtonGroup class="btn-group btn-group-toggle" [(ngModel)]="mymodel" name="fieldName" ngDefaultControl>
      <label ngbButtonLabel class="btn btn-primary" *ngFor="let flavour of flavours">
          <input ngbButton name="option" type="radio" [value]="flavour"> {{flavour}}
      </label>
    </div>
    <hr>
      Your Selection: {{mymodel}}
    </div>
  `,
  styles: []
})
export class AppComponent {
  flavours: string[] = ['Hawaian', 'Peperoni', 'Everything'];
  mymodel = 'Hawaian';
}
