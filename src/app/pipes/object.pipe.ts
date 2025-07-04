import { PipeTransform ,Pipe} from "@angular/core";

@Pipe({
    name: 'objectlist',
})

export class ObjectPipe implements PipeTransform{
    transform(value: object, format:string):string {
        let data = value
        let datavalues = Object.values(data)
        let langs =''
        if(format == 'currency'){
            return `${datavalues[0].name}`
        }
        if(format == 'lang'){
           datavalues.forEach((language,index) => 
            {   
               datavalues.length -1 == index?langs+=`${language}`:langs+=`${language},`
        })
        return langs
    }
        else{
            return ''
        }
        
    }
    constructor(){}
}