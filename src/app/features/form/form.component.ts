import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import axios from "axios";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  name: string;
  email: string;
  project: string;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      project: new FormControl()
    });
  }

  async save() {
    this.name = (<FormControl>this.form.get("name")).value;

    this.email = (<FormControl>this.form.get("email")).value;

    this.project = (<FormControl>this.form.get("project")).value;

    await axios.post("https://example.com/api/contact", this.form.value);
    // console.log(this.form.value);
  }
}
