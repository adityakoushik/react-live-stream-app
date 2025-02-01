import React from 'react';
import ReactPlayer from 'react-player';

const LiveStreamComponent = () => {
	return (
		<div className="max-w-4xl mx-auto p-2">
			<h2 className="text-xl font-bold mb-4">Private Live Stream</h2>
			<div className="relative w-full h-[520px] bg-slate-950/10 backdrop-blur-md p-2 rounded-xl">
				<ReactPlayer
					url={process.env.REACT_APP_LIVE_URL}
					playing={true}
					controls={true}
					width="100%"
					height="500px"
					className="rounded-lg shadow-lg border border-gray-300"
				/>
			</div>
		</div>
	);
};

export default LiveStreamComponent;
