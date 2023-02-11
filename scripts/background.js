chrome.runtime.onMessage.addListener(async (req) => {
  const jsonRes = await fetch(req.url + ".json");
  const obj = JSON.parse(await jsonRes.text());
  const media = obj[0].data.children[0].data.media;
  if (media) {
    if (media.reddit_video) {
      const videoUrl = media.reddit_video.fallback_url;
      await chrome.downloads.download({
        url: videoUrl,
        saveAs: true
      });
    }
  }
});