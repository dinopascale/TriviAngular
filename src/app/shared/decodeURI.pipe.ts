import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'decodeURI'
})
export class DecodeURIPipe implements PipeTransform {
    transform (value: string): string {
        return decodeURI(encodeURI(value));
    }
}
