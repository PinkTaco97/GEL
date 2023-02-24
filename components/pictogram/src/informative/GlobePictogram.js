import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const GlobePictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="GlobePictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={outline}
					d="M38.718,5.9 C50.116,5.9 60.147,11.847 65.888,20.795 C69.825,26.145 72.159,32.746 72.159,39.883 C72.159,57.675 57.685,72.15 39.893,72.15 C28.489,72.15 18.456,66.2 12.716,57.247 C8.781,51.898 6.45,45.301 6.45,38.168 C6.45,20.375 20.926,5.9 38.718,5.9 Z M16.5614634,57.9938036 C20.6925263,62.5970189 26.2335858,65.9102975 32.4974651,67.2465916 C29.9808597,65.2070673 27.7849133,62.005381 26.0941961,57.9940614 L26.0941961,57.9940614 Z M38.3235635,58.0121042 L28.9756594,58.0122002 C31.4175656,63.3711564 34.7828573,66.8103685 38.3231156,67.1930004 L38.3231156,67.1930004 L38.3235635,58.0121042 Z M60.870741,57.9938036 L51.7469883,57.9940614 L51.5374228,58.4812331 C49.9115825,62.184817 47.847015,65.1620083 45.4964799,67.1210364 L45.4964799,67.1210364 L45.8607848,67.0335907 C51.7445761,65.5785992 56.9444856,62.3688033 60.870741,57.9938036 L60.870741,57.9938036 Z M48.988652,58.0122002 L40.9565635,58.0121042 L40.957769,66.9088972 C44.0075033,65.9215268 46.8516663,62.7019841 48.988652,58.0122002 L48.988652,58.0122002 Z M38.3235635,40.5671042 L25.1972837,40.5673091 C25.4020401,46.1097033 26.3939143,51.1816895 27.9071403,55.3795735 L27.9071403,55.3795735 L38.3235635,55.3791042 L38.3235635,40.5671042 Z M52.7670277,40.5673091 L40.9565635,40.5671042 L40.9565635,55.3791042 L50.057171,55.3795735 C51.570397,51.1816895 52.5622713,46.1097033 52.7670277,40.5673091 L52.7670277,40.5673091 Z M68.3870049,40.5480997 L55.3364835,40.5480997 L55.3028102,41.3220291 C55.0457653,46.4637417 54.1402299,51.2440782 52.7442123,55.3612428 L52.7442123,55.3612428 L62.9788772,55.3608546 C66.0048326,51.1119282 67.9439851,46.0379646 68.3870049,40.5480997 L68.3870049,40.5480997 Z M22.5047009,40.5480997 L9.0451995,40.5480997 C9.48821933,46.0379646 11.4273718,51.1119282 14.4533272,55.3608546 L14.4533272,55.3608546 L25.0969721,55.3612428 L24.8912678,54.738732 C23.5446934,50.5560048 22.6965017,45.7251954 22.5047009,40.5480997 L22.5047009,40.5480997 Z M27.2541286,23.4502386 C25.9781795,27.6646426 25.2051018,32.6065952 25.1599917,37.9341786 L25.1599917,37.9341786 L38.3235635,37.9341786 L38.3235635,23.4511042 Z M50.7101828,23.4502386 L40.9565635,23.4511042 L40.9565635,37.9341786 L52.8043196,37.9341786 C52.7592095,32.6065952 51.9861318,27.6646426 50.7101828,23.4502386 L50.7101828,23.4502386 Z M64.5948863,23.4327671 L53.4253787,23.4327671 L53.6131446,24.120035 C54.7138465,28.2733398 55.3460076,32.956496 55.3768528,37.9159028 L55.3768528,37.9159028 L68.4833237,37.9152377 C68.4455646,32.6540196 67.035822,27.713016 64.5948863,23.4327671 L64.5948863,23.4327671 Z M24.4158057,23.4327671 L12.8373181,23.4327671 C10.4388768,27.6385023 9.03603693,32.4821834 8.9520984,37.640752 L8.9520984,37.640752 L8.95,37.915 L22.464,37.9154923 L22.4777356,36.9613201 C22.5845216,32.0820593 23.27364,27.49023 24.4158057,23.4327671 L24.4158057,23.4327671 Z M38.3231156,9.66324343 C34.365624,10.09097 30.6267702,14.3381912 28.151996,20.8168977 L28.151996,20.8168977 L38.3235635,20.8181042 Z M40.957769,9.94734668 L40.9565635,20.8181042 L49.8123153,20.8168977 C47.6139858,15.0618952 44.4182115,11.0676864 40.957769,9.94734668 L40.957769,9.94734668 Z M33.0803332,8.9 L32.4661385,9.02531264 C25.1203664,10.6009727 18.7712503,14.8953032 14.5279082,20.7997247 L14.5279082,20.7997247 L25.2464428,20.7997247 L25.4258852,20.2996099 C27.3054621,15.1677614 29.9670146,11.157658 33.0803332,8.9 L33.0803332,8.9 Z M44.9170975,9.01505678 C48.063155,11.3671885 50.7376335,15.5155639 52.5947416,20.7997247 L52.5947416,20.7997247 L62.9042962,20.7997247 C58.6516219,14.8823179 52.2839012,10.5820919 44.9170975,9.01505678 Z"
				/>
				<circle cx="51.752" cy="22.128" r="3.95" fill={highlight} />
				<circle cx="50.752" cy="56.689" r="3.95" fill={highlight} />
				<circle cx="23.445" cy="38.915" r="3.95" fill={highlight} />
			</g>
		</Pictogram>
	);
};

GlobePictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Globe',
	copyrightYear: '2020',
};
GlobePictogram.propTypes = Pictogram.propTypes;
