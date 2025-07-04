import { PipeTransform ,Pipe} from "@angular/core";

@Pipe({
    name: 'objectlist',
})

export class ObjectPipe implements PipeTransform{
    transform(value: object, format:string):string {
        let data = value
        let datavalues = Object.values(data)
        let val =''
        if(format == 'currency'){
            datavalues.forEach((obj,index) => {
                datavalues.length - 1 == index?val+=`${obj.name}` : val+= `${obj.name}`
            })
            return val
        }
        if(format == 'lang'){
           datavalues.forEach((language,index) => 
            {   
               datavalues.length -1 == index?val+=`${language}`:val+=`${language},`
        })
        return val
    }
        else{
            return ''
        }
        
    }
    constructor(){}
}