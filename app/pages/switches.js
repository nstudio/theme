import { EventData } from "data/observable";
import { Page } from "ui/page";
import { BaseModel } from "./base";

export class SwitchesModel extends BaseModel {

}

export function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new SwitchesModel(page);
}
