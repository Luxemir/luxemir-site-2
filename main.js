
window.addEventListener('load', async () => {
  if (window.ethereum) {
    const connectBtn = document.createElement('button');
    connectBtn.innerText = 'Connect Wallet';
    connectBtn.style.background = 'gold';
    connectBtn.style.color = 'black';
    connectBtn.style.fontSize = '1.1em';
    connectBtn.style.padding = '10px 20px';
    connectBtn.style.borderRadius = '6px';
    connectBtn.style.border = 'none';
    connectBtn.style.marginTop = '20px';

    connectBtn.onclick = async () => {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert('Connected: ' + accounts[0]);
      } catch (error) {
        alert('Connection failed.');
      }
    };

    document.body.appendChild(connectBtn);
  } else {
    alert('MetaMask not detected. Please install it.');
  }
});
