export class data{
    imageid:number
    imagePath:string
    datetime:Date
    productid:number
}


export class success {
    success:boolean
}

export class message{
    message:string
}

export class image {
    data:data
    success:success
    message:message
}