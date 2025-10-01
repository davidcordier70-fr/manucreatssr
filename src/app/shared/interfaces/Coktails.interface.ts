export interface ProductsInterface {
  _id:string,
  imageUrl:string,
  name:string,
  description:string,
  ingredients:string[]
  id_cat:number,
  id_sscat:number,
  new:boolean
}


export interface ProductsInterfaceForm {
  imageUrl:string | null,
  name:string | null,
  description:string | null,
  ingredients:(string | null)[]
  id_cat:number,
  id_sscat:number,
  new:boolean
}
