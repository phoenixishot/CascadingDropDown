import { Injectable } from '@angular/core';
import {  Category} from '../category/category';
import { SubCategory} from '../sub-category/sub-category'
@Injectable()
export class DropDownService {
    getCategory() {
        return [
            new Category(1, 'USA'),
            new Category(2, 'India'),
            new Category(3, 'Australia')
        ];
    }

    getSubCategories() {
        return [
            new SubCategory(1, 1, 'Arizona'),
            new SubCategory(2, 1, 'Alaska'),
            new SubCategory(3, 1, 'Florida'),
            new SubCategory(4, 1, 'Hawaii'),
            new SubCategory(5, 2, 'Gujarat'),
            new SubCategory(6, 2, 'Goa'),
            new SubCategory(7, 2, 'Punjab'),
            new SubCategory(8, 3, 'Queensland'),
            new SubCategory(9, 3, 'South Australia'),
            new SubCategory(10, 3, 'Tasmania')
        ];
    }
}
