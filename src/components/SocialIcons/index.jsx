import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGoogle,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
const SocialIcons = ({ message, host, id }) => {
	const shareMessage = `${message} hosted by ${host}`;
	const linkBackUrl = window.location.href;
	const handleTWShare = () => {
		window.open(
			`https://twitter.com/intent/tweet?text=${shareMessage}&url=${linkBackUrl}`
		);
	};
	// heavier task for facebook... bloody meta!
	const handleFBShare = () => {
		window.open(
			`https://www.facebook.com/sharer/sharer.php?title=${host}&&u=${'https://enviromates.co.uk'}`
		);
	};
	const handleTEShare = () => {
		window.open(
			`https://t.me/share/url?url=${linkBackUrl}&text=${shareMessage}`
		);
	};

	const handleGmailShare = () => {
		let gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=Enviromates%${host}&body=${shareMessage}%${linkBackUrl}&ui=2&tf=1&pli=1`;

		window.open(gmailUrl, 'sharer', 'toolbar=0,status=0,width=648,height=395');
	};
	return (
		<div className='social-icons-container'>
			<div className='left'>
				<h4>Please Share!</h4>
			</div>
			<div className='right'>
				{/* FACEOOK */}
				{/* <FontAwesomeIcon
					className='share-icon'
					onClick={handleFBShare}
					icon={faFacebook}
					size='3x' */}
				{/* /> */}
				{/* TWITTER */}
				<FontAwesomeIcon
					className='share-icon'
					onClick={handleTWShare}
					icon={faTwitter}
					size='3x'
				/>
				{/* TELEGRAM */}
				<FontAwesomeIcon
					className='share-icon'
					onClick={handleTEShare}
					icon={faTelegram}
					size='3x'
				/>
				{/* GMAIL */}
				<FontAwesomeIcon
					className='share-icon'
					onClick={handleGmailShare}
					icon={faGoogle}
					size='3x'
				/>

				{/* FACEBOOK */}
				<FontAwesomeIcon
					className='share-icon'
					onClick={handleFBShare}
					icon={faFacebook}
					size='3x'
				/>
			</div>
		</div>
	);
};

export default SocialIcons;
