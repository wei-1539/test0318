/**
 * videoScroll
 *
 * 用法：
 *   videoScroll([
 *     { box: ".thing12-video-box", video: ".thing12-video" },
 *   ])
 *
 * 規則：
 *   - 進入 viewport 50% → 播放（同一次顯示只播一次）
 *   - 離開 viewport < 20% → 暫停，並允許下次重播
 *   - prefers-reduced-motion: reduce → 不自動播，點擊才播
 *   - 使用 <source data-src> 延遲載入，搭配 poster 預覽圖
 */
function videoScroll(items) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    items.forEach(({ box: boxSel, video: videoSel }) => {
        const box = document.querySelector(boxSel)
        const video = document.querySelector(videoSel)
        if (!box || !video) return

        let loaded = false
        let playedThisVisit = false

        function loadSrc() {
            if (loaded) return
            loaded = true
            video.querySelectorAll('source[data-src]').forEach((s) => {
                s.src = s.dataset.src
            })
            video.load()
        }

        function tryPlay() {
            loadSrc()
            playedThisVisit = true
            video.currentTime = 0
            video.play()
        }

        // prefers-reduced-motion：點擊才播，不自動觸發
        if (prefersReduced) {
            video.addEventListener('click', () => {
                loadSrc()
                if (video.paused) {
                    video.play()
                } else {
                    video.pause()
                }
            })
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const ratio = entry.intersectionRatio

                    if (ratio >= 0.5 && !playedThisVisit) {
                        tryPlay()
                    } else if (ratio < 0.2) {
                        video.pause()
                        playedThisVisit = false
                    }
                })
            },
            { threshold: [0, 0.2, 0.5, 1] }
        )

        observer.observe(box)
    })
}

videoScroll([
    { box: '.thing12-video-box', video: '.thing12-video' },
    { box: '.thing17-video-box', video: '.thing17-video' },
    { box: '.thing22-video-box', video: '.thing22-video' },
    { box: '.thing23-video-box', video: '.thing23-video' },
    { box: '.thing29-video-box', video: '.thing29-video' },
    { box: '.thing30-left-video-box', video: '.thing30-left-video' },
    { box: '.thing30-right-video-box', video: '.thing30-right-video' },
    { box: '.thing31-left-video-box', video: '.thing31-left-video' },
    { box: '.thing31-right-video-box', video: '.thing31-right-video' },
    { box: '.thing32-video-box', video: '.thing32-video' },
    { box: '.thing34-video-box', video: '.thing34-video' },
    
])
