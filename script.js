function updateCode() {
  const code = document.querySelector('pre code');
  code.textContent = document.querySelector('fc').innerHTML.trimLeft();
  hljs.highlightBlock(code);
}

const controls = document.getElementById('controls');

function listener(evt) {
  const [id, _, prop] = evt.target.parentElement.textContent.split(' ');
  document.getElementById(id).style[prop] = `${evt.target.value}px`;
  updateCode();
}
controls.addEventListener('click', listener);
controls.addEventListener('keyup', listener);

for (const node of controls.children) {
  const [id, _, prop] = node.textContent.split(' ');
  document.getElementById(id).style[prop] = `${node.children[0].value}px`;
}

updateCode();
