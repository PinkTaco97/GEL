import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const CelebrationPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="CelebrationPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M56.225 51.218c-3.632.954-7.892-3.109-9.485-9.057-1.254-4.678-1.995-9.267-2.44-12.798h12.617c1.398 3.658 2.448 6.784 3.128 9.322.996 3.716.709 7.452-.769 9.996-.778 1.34-1.833 2.217-3.05 2.537M43.75 24.061l9.968-2.599a252.847 252.847 0 0 1 2.224 5.401h-11.93a137.717 137.717 0 0 1-.262-2.802m23.286 44.8c-1.78.474-2.912.141-3.438-.104l-4.235-15.81c1.797-.525 3.317-1.775 4.4-3.639 1.806-3.106 2.187-7.555 1.023-11.9-1.172-4.372-3.375-10.362-6.548-17.804-.16-.374-.264-.616-.294-.698l-.403-1.049L41.028 22.2l.148 1.097c.012.092.03.318.058.66.218 2.62.878 10.588 3.091 18.845 1.76 6.564 6.294 11.05 10.822 11.05.439 0 .878-.058 1.315-.145l4.24 15.826c-.332.476-1.143 1.331-2.922 1.808a1.5 1.5 0 1 0 .773 2.9l9.26-2.482a1.5 1.5 0 0 0-.776-2.898zM30.892 26.863h-12.15a128.5 128.5 0 0 1 2.643-6.028l9.93 2.734a276.65 276.65 0 0 1-.424 3.294zm-2.709 14.784c-.994 3.716-3.111 6.808-5.663 8.273-1.343.77-2.697 1.003-3.91.67-3.627-.992-5.28-6.638-3.688-12.584.737-2.75 1.686-5.64 2.83-8.643h12.79c-.739 5.063-1.527 9.186-2.359 12.284zm-8.226-23.78l-.422 1.02c-.035.086-.13.285-.271.586-3.01 6.373-5.282 12.39-6.756 17.886-1.928 7.2.295 13.889 5.059 15.508l-4.242 15.829c-.522.244-1.65.579-3.425.107l-.011-.003a1.499 1.499 0 1 0-.776 2.897h.004l9.243 2.479a1.49 1.49 0 0 0 .401.054 1.5 1.5 0 0 0 .387-2.95l-.01-.002c-1.772-.477-2.583-1.33-2.916-1.804l4.237-15.812a6.72 6.72 0 0 0 1.599.2c1.334 0 2.701-.387 4.032-1.15 3.116-1.788 5.672-5.45 6.836-9.794 1.17-4.368 2.258-10.655 3.231-18.688.049-.406.08-.668.094-.755l.177-1.11-16.47-4.498z"
				/>
				<polygon fill={highlight} points="37.212 16.031 39.712 16.031 39.712 4 37.212 4" />
				<polygon fill={highlight} points="24.068 7.803 31.461 17.295 33.433 15.76 26.041 6.267" />
				<polygon fill={highlight} points="52.857 7.803 45.464 17.295 43.492 15.76 50.884 6.267" />
			</g>
		</Pictogram>
	);
};

CelebrationPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Celebration',
	copyrightYear: '2021',
};
CelebrationPictogram.propTypes = Pictogram.propTypes;
