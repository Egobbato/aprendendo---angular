import { Component, OnInit } from "@angular/core";
import {Course} from "./course"

@Component ({
  selector:'app-course-list',
  templateUrl:'./course-list.component.html'
})


export class CourseListComponent implements OnInit {

  courses: Course [] = []

  ngOnInit(): void {
    this.courses = [{
      id:1,
  name:'Angular:Form',
  imageUrl:'/assets/images/forms.png',
  price:99.99,
  code:'XPS-123',
  duration:120,
  rating:5.4,
  realeseDate:"Junho, 27, 2022"

    },
    {
      id:2,
  name:'Angular:HTTP',
  imageUrl:'/assets/images/http.png',
  price:45.99,
  code:'LKL-123',
  duration:80,
  rating:4,
  realeseDate:"Outubro, 20, 2000"
    }

  ]
  }

}
