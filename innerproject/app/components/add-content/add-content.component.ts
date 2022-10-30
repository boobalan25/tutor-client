import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/service/common-services';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  topic: string = '';
  content: string = '';
  example: string = '';
  language: any = 'JAVA';
  constructor(private service: CommonServices) { }

  ngOnInit(): void {
  }

  addContent() {
    let mainContent = {
      topic: this.topic,
      contents: [this.content],
      examples: [this.example],
      language: this.language
    }
    this.service.addContent(mainContent).then(data => {
      alert("Content Added");
    }, error =>{
      console.log(error);
      alert(error.message)
    })
  }
}
