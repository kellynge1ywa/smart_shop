export interface Product{
    id:string,
    name:string,
    imageURL:string,
    price:number,
    categoryIdentifier:string,
    categoryId:string
}

export interface ResponseDto{
    error:string,
    result:Product[],
    success:boolean
  
}