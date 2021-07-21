import { signIn, silentSignIn } from './auth.js';
import { graphClient } from './graphClient.js';

async function displayUI(auto) {
  if (auto) {
    const loggedIn = await silentSignIn();
    if (!loggedIn) {
      return;
    }
  }
  else {
    await signIn();
  }

  document.getElementById('signin').style = 'display: none';
  loadData();
}

export async function loadData() {
  const userInfo = await loadUserInfo();
  document.getElementById('userInfo').innerHTML = `${userInfo.displayName} (${userInfo.jobTitle})<br/>${userInfo.id}`;
}

async function loadUserInfo() {
  const userInfo = await graphClient
    .api('me?$select=displayName,jobTitle,id')
    .get();
  return userInfo;
}

// Expose for login button AND call immediately to attempt auto-login
window.displayUI = displayUI;
displayUI(true);