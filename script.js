document.getElementById('greet').addEventListener('click', function(){
  const msg = document.getElementById('msg');
  const now = new Date();
  msg.textContent = `Hello — live at ${now.toLocaleTimeString()}`;
});
