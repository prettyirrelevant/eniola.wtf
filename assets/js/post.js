const codeBlocks = document.querySelectorAll('pre.highlight');

codeBlocks.forEach((codeBlock) => {
  const copyButton = document.createElement('button');
  copyButton.className = 'copy';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';

  codeBlock.append(copyButton);

  copyButton.addEventListener('click', () => {
    const code = codeBlock.querySelector('code').innerText.trim();

    window.navigator.clipboard.writeText(code);
    copyButton.innerText = 'Copied';

    setTimeout(function () {
      copyButton.innerText = 'Copy';
    }, 2500);
  });
});
