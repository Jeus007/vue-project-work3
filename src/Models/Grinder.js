import {  ContentItem } from '@kentico/kontent-delivery';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class Grinder extends ContentItem {

  constructor(){
    super({
      propertyResolver: ((fieldName) => {
                
        if (fieldName === 'product_name'){
          return 'productName';
        }

        if (fieldName === 'product_status'){
          return 'productStatus';
        }

        if (fieldName === 'short_description'){
          return 'shortDescription';
        }

        if (fieldName === 'long_description'){
          return 'longDescription';
        }

        if (fieldName === 'url_pattern'){
          return 'urlPattern';
        }
      }),
      linkResolver: (link) => resolveContentLink(link)
    })    
  }
    
}