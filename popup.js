// Popup script for Copilot Continue extension
document.addEventListener('DOMContentLoaded', async () => {
  const statusElement = document.getElementById('status');
  const statusText = document.getElementById('status-text');
  
  try {
    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) {
      updateStatus('inactive', 'No active tab');
      return;
    }
    
    // Check if the current tab is a VS Code web environment
    const isVSCode = await chrome.tabs.sendMessage(tab.id, { action: 'checkVSCode' })
      .catch(() => false);
    
    if (isVSCode) {
      updateStatus('active', 'Active in VS Code');
    } else if (tab.url.includes('vscode.dev') || tab.url.includes('github.dev') || tab.url.includes('code.visualstudio.com')) {
      updateStatus('active', 'VS Code environment detected');
    } else {
      updateStatus('inactive', 'Not in VS Code environment');
    }
  } catch (error) {
    console.error('Error checking status:', error);
    updateStatus('inactive', 'Status check failed');
  }
});

function updateStatus(type, message) {
  const statusElement = document.getElementById('status');
  const statusText = document.getElementById('status-text');
  
  statusElement.className = `status ${type}`;
  statusText.textContent = message;
}
