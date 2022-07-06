import {  ContentItem } from '@kentico/kontent-delivery';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class Cafe extends ContentItem {

  constructor(){
    super({
      propertyResolver: ((fieldName) => {
                
        if (fieldName === 'zip_code'){
          return 'zipCode';
        }

      }),
      linkResolver: (link) => resolveContentLink(link)
    })    
  }    
}