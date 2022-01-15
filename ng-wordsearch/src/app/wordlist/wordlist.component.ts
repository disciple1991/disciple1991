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
    l1: '',
    l2: '',
    l3: '',
    l4: '',
    l5: ''
  });

  // wordList: string[];
  wordofthedayList: string[];
  wordofthedayfilteredList: string[];

  constructor(private formBuilder: FormBuilder, private wordService: WordofthedayService) { }

  ngOnInit(): void {

    // this.letterForm.controls['l1'].setValue('a');
    this.wordofthedayList = this.wordService.getWordOfTheDayList();

  }

  onSubmit(): void {

    this.wordofthedayfilteredList = [''];

    let lCount = 0;
    const l1 = this.letterForm.controls['l1'].value;
    const l2 = this.letterForm.controls['l2'].value;
    const l3 = this.letterForm.controls['l3'].value;
    const l4 = this.letterForm.controls['l4'].value;
    const l5 = this.letterForm.controls['l5'].value;

    if (l1.toString() != '') lCount = lCount + 1;
    if (l2.toString() != '') lCount = lCount + 1;
    if (l3.toString() != '') lCount = lCount + 1;
    if (l4.toString() != '') lCount = lCount + 1;
    if (l5.toString() != '') lCount = lCount + 1;

    if (lCount >= 3) {

    this.wordofthedayList.forEach(element => {

      switch (lCount) {
        case 5:
          if (element.includes(l1) && element.includes(l2)
          && element.includes(l3) && element.includes(l4) && element.includes(l5)) {
          this.wordofthedayfilteredList.push(element);
            //console.log(element);
        }
        break;
        case 4:
          if (element.includes(l1) && element.includes(l2)
          && element.includes(l3) && element.includes(l4)) {
            this.wordofthedayfilteredList.push(element);
            //console.log(element);
        }
        break;
        case 3:
          if (element.includes(l1) && element.includes(l2)
          && element.includes(l3)) {
            this.wordofthedayfilteredList.push(element);
                      //console.log(element);
        }
        break;
        default:
          break;
      }

    });

    this.wordofthedayfilteredList.forEach(element => {
      if (!element.includes('r')
          && !element.includes('s')
          && !element.includes('l')
          && !element.includes('e')
          ) {
        console.log(element);
      }
    });
  }


    this.letterForm.reset();
  }

}
