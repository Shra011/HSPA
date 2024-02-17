import { Component } from "@angular/core";

@Component({
    selector : 'app-property-card',
    //template : `<h1>property-card component</h1>`,
    templateUrl : 'property-card.component.html',
    //styles : [`h1{font-weight: normal }`]
    styleUrls : ['property-card.component.css']
})
export class PropertyCardComponent{
    Property: any = {
        "Id":1,
        "Name":"birla house",
        "Type":"House",
        "Price":12000
    }
}