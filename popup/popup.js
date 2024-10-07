document.addEventListener('DOMContentLoaded', function() {
    const fillFormButton = document.getElementById('fillForm');
    const openPageButton = document.getElementById('openPage');
  
    if (fillFormButton) {
      fillFormButton.addEventListener('click', function() {
        chrome.storage.local.get(['firstName', 'lastName', 'email', 'phone', 'linkedin', 'magneto'], function(items) {
          chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            const activeTabUrl = activeTab.url;
  
            if (!activeTabUrl.startsWith('chrome://')) {
              chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: fillForm,
                args: [items]
              });
            } else {
              console.error("Cannot execute script on a chrome:// URL");
            }
          });
        });
      });
    }
  
    if (openPageButton) {
      openPageButton.addEventListener('click', function() {
        chrome.tabs.create({ url: chrome.runtime.getURL('/page/page.html') });
      });
    }
  });
  
  function fillForm(data) {
    if (data) {
      document.querySelector('input[name="firstName"]').value = data.firstName || '';
      document.querySelector('input[name="lastName"]').value = data.lastName || '';
      document.querySelector('input[name="email"]').value = data.email || '';
      document.querySelector('input[name="phone"]').value = data.phone || '';
      document.querySelector('input[name="linkedin"]').value = data.linkedin || '';
      document.querySelector('input[name="magneto"]').value = data.magneto || '';
    }
  }
  