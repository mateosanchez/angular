import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  // he chose the names 'pipData' and 'pipeModifier'
  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
      return (
        // using toLowerCase() because the comparisons have to be the same
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
