<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rauch mit Julijan</title>
  <link rel="manifest" href="manifest.json">
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  </script>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      padding: 24px;
      max-width: 400px;
      width: 90%;
      text-align: center;
    }
    h1 {
      margin-top: 0;
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
    .action-group, .message-content {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    button {
      padding: 12px;
      font-size: 1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button.primary {
      background-color: #ff4c4c;
      color: #fff;
    }
    button.secondary {
      background-color: #ddd;
      color: #333;
    }
    button:hover {
      opacity: 0.9;
    }
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚬 Rauch mit Julijan?</h1>
    <p>Dein System fühlt sich entspannt an. Was möchtest du tun?</p>
    <div id="options" class="action-group">
      <button id="btn-yes" class="primary">Ja, lass uns rauchen</button>
      <button id="btn-no" class="secondary">Nein, lieber nicht</button>
      <button id="btn-maybe" class="secondary">Überzeug mich</button>
    </div>
    <div id="message" class="hidden message-content"></div>
  </div>
  <script>
    const options = document.getElementById('options');
    const message = document.getElementById('message');

    document.getElementById('btn-yes').addEventListener('click', () => {
      window.location.href = 'https://www.youtube.com/watch?v=FXtl2Zcdzow';
    });

    document.getElementById('btn-no').addEventListener('click', () => {
      options.classList.add('hidden');
      message.innerHTML = '<p>Schade, vielleicht beim nächsten Mal!</p>';
      message.classList.remove('hidden');
      setTimeout(() => {
        window.location.href = 'https://www.youtube.com/shorts/tvKgLVkWb5o';
      }, 3000);
    });

    document.getElementById('btn-maybe').addEventListener('click', () => {
      options.classList.add('hidden');
      message.innerHTML = `
        <div class="message-content">
          <p><strong>--- Warum rauchen?</strong></p>
          <p>Eine gemeinsame Zigarette ist mehr als nur Rauch –<br>
          es ist ein Moment des Austauschs, der Ruhe und Verbundenheit.</p>
          <p>Erinnerungen entstehen nicht durch Klicks, sondern durch Augenblicke.</p>
          <button id="final-yes" class="primary">Okay, ich komm mit</button>
          <button id="final-no" class="secondary">Nein, danke</button>
        </div>
      `;
      message.classList.remove('hidden');
      document.getElementById('final-yes').addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      });
      document.getElementById('final-no').addEventListener('click', () => {
        alert('Das war… die falsche Entscheidung. Aber hey, du wirst schon wissen, was du verpasst hast.');
        window.location.href = 'https://www.youtube.com/watch?v=bZRZZmsL1qA';
      });
    });
  </script>
</body>
</html>
