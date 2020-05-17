import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class Api {
    constructor() { }

    public static Url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick';
}