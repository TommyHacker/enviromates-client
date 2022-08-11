import FacebookShareLink from '../FadcebookShareLink';
import TwitterShareLink from '../TwitterShareLink';

const ShareLinks = () => {
	return (
		<>
			<TwitterShareLink
				url={'INSERT URL TO LINK BACK TO HERE'}
				title={'INSERT TITLE'}
				hashtags={'INSERT PREPOPULATED HASHTAGS FOR TWEET'}
				description={'INSERT TWEET BODY'}
			/>
			<FacebookShareLink
				url={'INSERT URL TO LINK BACK TO HERE'}
				quote={'INSERT PREPOPULATED FACEBOOK QUOTE'}
				hashtag={'INSERT PREPOPULATED HASH'}
				description={'INSERT PREPOPULATED FACEBOOK DESCRIPTION'}
			/>
		</>
	);
};

export default ShareLinks;
