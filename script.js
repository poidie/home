$(document).ready(function(){
  $('#title').focus();
    $('#text').autosize();
});

const h1 = document.getElementById("h")

const setShadow = () => {
  let displace = 0.1 + Math.random() * 1.4
  const shadow = `${displace}px 0px 1px rgba(0, 70, 255, 0.6), ${-displace}px 0px 1px rgba(255, 50, 0, 0.6), 0 0 4px`
  document.body.style.textShadow = shadow;
}

setShadow();
setInterval(setShadow, 40)