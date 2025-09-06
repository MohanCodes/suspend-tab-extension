chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.discard(tab.id, () => {
    if (chrome.runtime.lastError) {
      console.log(`Discard error: ${chrome.runtime.lastError.message}`);
    }
  });
});
