import React from 'react';
import FacebookShareLink from '../FacebookShareLink';
import TwitterShareLink from '../TwitterShareLink';
const ShareLinks = () => {
	return (
		<>
			<TwitterShareLink
				url={'https://enviromates.co.uk/'}
				title={'INSERT TITLE'}
				hashtags={['#enviromates', '#greenplanet']}
				description={'INSERT TWEET BODY'}
			/>
			<FacebookShareLink
				url={'https://enviromates.co.uk/'}
				quote={'INSERT PREPOPULATED FACEBOOK QUOTE'}
				hashtag={'INSERT PREPOPULATED HASH'}
				description={'INSERT PREPOPULATED FACEBOOK DESCRIPTION'}
			/>
		</>
	);
};

export default ShareLinks;
