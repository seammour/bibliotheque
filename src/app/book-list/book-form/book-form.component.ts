import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private router: Router ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.bookForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        author: ['', Validators.required],
      }
    )
  }
  
  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const book = new Book(title, author);
    console.log("onSaveBook -- book : " +book);
    this.booksService.createNewBook(book)
    this.router.navigate(['/books']);
    
  }

}
