import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';

const TwitterShareLink = ({ url, title, hashtags, description }) => {
	return (
		<TwitterShareButton
			url={url}
			title={title}
			hashtags={hashtags}
			description={description}>
			<TwitterIcon size={32} round />
		</TwitterShareButton>
	);
};

export default TwitterShareLink;
