export class data {
    productId?:number 
    productName:string 
    categoryid:number 
    description:string 
}

export class success {
    success:boolean
}

export class message{
    message:string
}

export class pc {
    data:data
    success:success
    message:message
}