import { Component, OnInit } from '@angular/core';
import { Category} from '../category/category';
import { CategoryComponent} from '../category/category.component';
import {SubCategory } from '../sub-category/sub-category';
import { SubCategoryComponent} from '../sub-category/sub-category.component';
import { DropDownService } from '../service/drop-down.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cascading-drop-down',
  templateUrl: './cascading-drop-down.component.html',
  styleUrls: ['./cascading-drop-down.component.css'],
  providers: [DropDownService]
})
export class CascadingDropDownComponent implements OnInit {

    constructor(private dataService: DropDownService) { }

    selectedCategory: Category;
    Categories: Category[];
    SubCategories: SubCategory[];

    myForm: FormGroup;



    ngOnInit() {
        this.Categories = this.dataService.getCategory();
        this.myForm = new FormGroup({
            Category: new FormControl(this.Categories),
            SubCategory: new FormControl(this.SubCategories)

        })
    }
    onSelect(categoryid) {
        this.SubCategories = this.dataService.getSubCategories().filter(item => item.categoryid == categoryid);
    }

    onSubmit(myForm) {
        console.log(myForm);
    }

}
