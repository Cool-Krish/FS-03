window.addEventListener('keydown', function (e) {
            document.querySelector('span').innerHTML = ` ${e.key}`;
            document.querySelector('h2').innerHTML = `${e.keyCode}`;
          }, false);