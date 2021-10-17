import { icons } from "../../assets/icons";

const Icon = ({ iconToChoose, width = '50', height = '50' }) => {
	

	const {path, vb} = icons[iconToChoose];

	return (
		<>
			<svg
				width={`${width}px`}
				height={`${height}px`}
				aria-hidden='true'
				focusable='false'
				data-prefix='far'
				data-icon='calendar-plus'
				role='img'
				viewBox={vb}
				preserveAspectRatio='xMidYMid meet'
			>
				<path fill='currentColor' d={path}></path>
			</svg>
		</>
	);
};

export default Icon;
