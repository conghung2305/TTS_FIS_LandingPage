export type Category = {
    id?:number,
    name:string,
    image:string
}
export type CategoryInputs = Omit<Category,`id`>