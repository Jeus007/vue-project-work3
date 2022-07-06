import { ContentItem } from '@kentico/kontent-delivery';
import { resolveContentLink } from '../Utilities/ContentLinks';
import TwitterWidgetsLoader from 'twitter-widgets';

export class Tweet extends ContentItem {
  constructor() {
    super({
      richTextResolver: tweet => {
        let tweetLink = tweet.tweetLink.value;
        let tweetID = tweetLink.match('^.*twitter.com/.*/(\\d+)/?.*$')[1];

        TwitterWidgetsLoader.load(twitter => {
          let selectedTheme = tweet.theme.value.pop().codename;
          selectedTheme = selectedTheme ? selectedTheme : 'light';
          twitter.widgets.createTweet(
            tweetID,
            document.getElementById(`tweet${tweetID}`),
            {
              theme: selectedTheme
            }
          );
        });
        return `<div id="tweet${tweetID}"></div>`;
      },
      propertyResolver: ((fieldName) => {

        if (fieldName === 'tweet_link') {
          return 'tweetLink';
        }

        if (fieldName === 'display_options') {
          return 'displayOptions';
        }
      }),
      linkResolver: (link) => resolveContentLink(link)
    })
  }
}