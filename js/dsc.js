
function sendTokenToExtension() {
  alert('Start sending dsc to extendtion 1')
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  var isFirefox = typeof InstallTrigger !== 'undefined';
  if (isChrome) {
    var editorExtensionId = 'djjdnjlcomdkphnhoopngmjcgpbgncbo'

    // Make a simple request:
    chrome.runtime.sendMessage(editorExtensionId, {openUrlInEditor: 'this is token'},
      function(response) {
        console.log("Response", response)
        if (!response.success)
          console.log('Wrong man!');
      })
  }
  if (isFirefox) {}
}

sendTokenToExtension()
