import {  ContentItem } from '@kentico/kontent-delivery';
import {  resolveContentLink } from '../Utilities/ContentLinks';

export class AboutUs extends ContentItem {
  constructor(){
    super({
      propertyResolver: ((fieldName) => {                
        if (fieldName === 'url_pattern'){
          return 'urlPattern';
        }
        if (fieldName === 'fact_about_us'){
          return 'factAboutUs';
        }
      }),
      linkResolver: (link) => resolveContentLink(link)
    })    
  }
    
}
