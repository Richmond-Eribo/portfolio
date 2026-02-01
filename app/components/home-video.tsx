export function HomeVideo() {
  return (
    <div className="relative w-full h-full max-w-container mx-auto cursor-none pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-bottom mx-auto fade-video-edge-responsive"
      >
        <source
          src="https://cdn-23498553294865320.richmonderibo.dev/video/lab-cropped.mp4"
          type="video/webm"
        ></source>
      </video>
    </div>
  )
}
