import { style } from '@angular/animations';
import { 
	Component, 
	Input, 
	Output, 
	EventEmitter, 
	SimpleChanges, 
	OnInit, 
	DoCheck, 
	OnDestroy 
} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
		styleUrls: ['./product.component.scss']
})

export  class ProductComponent implements DoCheck, OnInit, OnDestroy { 

   @Input() product: Product;
   @Output()  productClicked: EventEmitter<any> = new EventEmitter();

   constructor() {
    console.log('1. constructor');
   }

 /*   ngOnChanges(changes: SimpleChanges){
       console.log('2. ngOnChanges');
       console.log(changes);     
   } */

   ngOnInit(){
    console.log('3. ngOnInit');
   }

   ngDoCheck(){
       console.log('4. ngDoCheck');  
   }

	ngOnDestroy(){
		console.log('ngOnDestroy');
		
	}
   addCart() {
       console.log('Agregado al carrito ');
       this.productClicked.emit(this.product.id);
   }
}