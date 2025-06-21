let isSplit = false;
document.getElementById('splitBtn').addEventListener('click', function () {
  if (!isSplit) {
    document.getElementById('img1').classList.add('split-left');
    document.getElementById('img2').classList.add('split-center');
    document.getElementById('img3').classList.add('split-right');
    isSplit = true;
  } else {
    document.getElementById('img1').classList.remove('split-left');
    document.getElementById('img2').classList.remove('split-center');
    document.getElementById('img3').classList.remove('split-right');
    isSplit = false;
  }
});
