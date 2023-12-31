import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoaderComponent } from "./loader/loader.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoggingService } from "../logging.service";

@NgModule({
    declarations:[
        AlertComponent,
        LoaderComponent,
        PlaceHolderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoaderComponent,
        PlaceHolderDirective,
        DropdownDirective,
        CommonModule
    ],
//   providers: [LoggingService],

})
export class SharedModule {}