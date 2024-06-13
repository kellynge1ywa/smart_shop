export interface Category{
    id:string,
    name:string,
    identifier:string,
    imageURL:string
}

export interface ResponseDto{
    error:string,
    result:Category[],
    success:boolean
  
}