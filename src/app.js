import "toastr/build/toastr.css";
import "font-awesome/css/font-awesome.css";

import { inject } from "aurelia-framework";
import { ToastrService } from 'aurelia-toolbelt';


@inject(ToastrService)
export class App {

  constructor(toastrService) {
    this.ts = toastrService;
  }

  alertMessage() {
    this.ts.success('Thanks buddy :+1:');
  }
}
