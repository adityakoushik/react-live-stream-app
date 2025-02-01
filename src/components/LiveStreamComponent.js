import React from 'react'

const LiveStreamComponent = () => {
	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Live Streaming</h1>
			<iframe
				width="100%"
				height="500"
				src={process.env.REACT_APP_LIVE_URL}
				title="Live Stream"
				frameBorder="0"
				allowFullScreen
			></iframe>
		</div>
	)
}

export default LiveStreamComponent
