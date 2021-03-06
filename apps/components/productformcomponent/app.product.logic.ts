import { Product, Products } from "./app.product.model";

export class ProductLogic {
    private products: Array<Product>;

    constructor(){
        this.products = Products;
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    saveProduct(p:Product): Array<Product> {
        p.isChecked = false;
        this.products.push(p);
        return this.products;
    }

    deleteProduct(i: number) : Array<Product> {         
        this.products.splice(i,1);
        return this.products;
    }


    // deleteProduct(i: number) : void {         
    //     this.products.splice(i,1);
    // }
}
