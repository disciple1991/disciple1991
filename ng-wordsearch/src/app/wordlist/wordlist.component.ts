import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WordofthedayService } from '../wordoftheday.service';

@Component({
  selector: 'app-wordlist',
  templateUrl: './wordlist.component.html',
  styleUrls: ['./wordlist.component.css']
})
export class WordlistComponent implements OnInit {

  letterForm = this.formBuilder.group({
    lettersInWord: '',
    lettersNotInWord: ''
  });

  // wordList: string[];
  wordofthedayList: string[];
  wordofthedayfilteredList: string[];
  lettersInWordArray: string[];
  lettersNotInWordArray: string[];

  constructor(private formBuilder: FormBuilder, private wordService: WordofthedayService) { }

  ngOnInit(): void {

    // this.letterForm.controls['l1'].setValue('a');
    this.wordofthedayList = this.wordService.getWordOfTheDayList();
    this.wordsLeft = '';

  }

  public wordsLeft:any;

  onSubmit(): void {

    this.wordsLeft = '';
    this.wordofthedayfilteredList = [''];

    const lettersInWord = this.letterForm.controls['lettersInWord'].value;
    const lettersNotInWord = this.letterForm.controls['lettersNotInWord'].value;
    this.lettersInWordArray = Array.from(lettersInWord);
    this.lettersNotInWordArray = Array.from(lettersNotInWord);

    this.wordofthedayList.forEach(element => {

        let counter = 0;
        // look for words that contain the letters
        for (let index = 0; index < this.lettersInWordArray.length; index++) {
          const letter = this.lettersInWordArray[index];
          if (element.includes(letter)) {
            counter++;
          }
        }

        // if word contains all the letters
        if (counter == this.lettersInWordArray.length) {
          this.wordofthedayfilteredList.push(element);
        }

    });

    this.wordofthedayfilteredList.forEach(element => {

        let counter = 0;
        // look for words that don't contain the letters
        for (let index = 0; index < this.lettersNotInWordArray.length; index++) {
          const letter = this.lettersNotInWordArray[index];
          if (!element.includes(letter)) {
            counter++;
          }
        }

        // add word if these letters are not in the word
        if (counter == this.lettersNotInWordArray.length) {
          this.wordsLeft += element + ' ';
        }

    });

    // this.letterForm.reset();
  }

}
