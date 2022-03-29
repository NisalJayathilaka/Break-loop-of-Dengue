import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpace'
})
export class ConvertToPipe implements PipeTransform{
 transform(value: string, charactor: string) :string{
     return value.replace(charactor,' ');
 }

}