import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const FacebookShareLink = ({ url, quote, hashtag, description }) => {
	return (
		<FacebookShareButton
			url={url}
			quote={quote}
			hashtag={hashtag}
			description={description}>
			<FacebookIcon size={32} round />
		</FacebookShareButton>
	);
};

export default FacebookShareLink;
