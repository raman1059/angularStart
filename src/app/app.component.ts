import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }
  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  }
  courses = [
    { id: 1, name: ' course1 '},
    { id: 2, name: ' course2 '},
    { id: 3, name: ' course3 '}
  ];

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'})
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course) {
    course.name = 'UPDATED';
  }
  loadCourses() {
    this.courses = [
      { id: 1, name: ' course1 '},
      { id: 2, name: ' course2 '},
      { id: 3, name: ' course3 '}
    ];
  }
  trackCourse(index, course) {
    return course? course.id : undefined;
  }

  viewMode = 'somethingElse';
  canSave = false;

  task = {
    title: 'Review Applications',
    assignee: null    //Safe traversal operator does'nt show an error of null.n
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed: ", eventArgs);
  }
}
