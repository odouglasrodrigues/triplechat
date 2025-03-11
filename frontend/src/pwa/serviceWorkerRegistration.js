// src/pwa/serviceWorkerRegistration.js

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      window.location.hostname === "[::1]" ||
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          checkValidServiceWorker(swUrl);
        } else {
          registerValidSW(swUrl);
        }
      });
    }
  }
  
  function registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);
      })
      .catch((error) => {
        console.error("Erro ao registrar o Service Worker:", error);
      });
  }
  
  function checkValidServiceWorker(swUrl) {
    fetch(swUrl)
      .then((response) => {
        if (
          response.status === 404 ||
          response.headers.get("content-type").indexOf("javascript") === -1
        ) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
            window.location.reload();
          });
        } else {
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log("Sem conexão com a internet. Rodando offline...");
      });
  }
  
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  