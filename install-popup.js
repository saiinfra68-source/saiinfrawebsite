let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.createElement('button');
  installBtn.innerText = "Install App";
  installBtn.style.position = "fixed";
  installBtn.style.bottom = "20px";
  installBtn.style.right = "20px";
  installBtn.style.padding = "12px 18px";
  installBtn.style.background = "#d4af37";
  installBtn.style.color = "#000";
  installBtn.style.border = "none";
  installBtn.style.borderRadius = "8px";
  installBtn.style.fontSize = "16px";
  installBtn.style.cursor = "pointer";
  installBtn.style.zIndex = "9999";

  document.body.appendChild(installBtn);

  installBtn.addEventListener('click', () => {
    installBtn.remove();
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  });
});