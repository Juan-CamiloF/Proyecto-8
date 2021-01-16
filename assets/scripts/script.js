const tecla = document.querySelectorAll('.tecla')
const barraLetras = document.getElementById('barraLetras')
const barraNumeros = document.getElementById('barraNumeros')

barraLetras.innerText = localStorage.getItem('letras')
barraNumeros.innerText = localStorage.getItem('numeros')

const teclado = (event) => {
    const letra = event.target.innerText;
    switch (letra) {
        case 'A-1':
            if (barraLetras.innerText == '') {
                barraLetras.innerText = 'A'
                localStorage.setItem('letras', barraLetras.innerText)
            }else if (barraLetras.innerText == 'A') {
                swal('Ya esta la letra A')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1') {
                    swal('El 1 ya esta')
                } else if (barraNumeros.innerText == '') {
                    barraNumeros.innerText += '1';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'B-2':
            if (barraLetras.innerText == 'AB') {
                swal('Ya esta la B')
            } else if (barraLetras.innerText == 'A') {
                barraLetras.innerText += 'B'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '') {
                swal('Falta la letra A')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12') {
                    swal('El 2 ya esta')
                } else if (barraNumeros.innerText == '1') {
                    barraNumeros.innerText += '2';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 1')
                }
            }
            break;
        case 'C-3':
            if (barraLetras.innerText == 'ABC') {
                swal('Ya esta la C')
            } else if (barraLetras.innerText == 'AB') {
                barraLetras.innerText += 'C'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A') {
                swal('Falta la letra AB')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123') {
                    swal('El 3 ya esta')
                } else if (barraNumeros.innerText == '12') {
                    barraNumeros.innerText += '3';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 12')
                }
            }
            break;
        case 'D-4':
            if (barraLetras.innerText == 'ABCD') {
                swal('Ya esta la D')
            } else if (barraLetras.innerText == 'ABC') {
                barraLetras.innerText += 'D'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB') {
                swal('Falta la letras ABC')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1234') {
                    swal('El 4 ya esta')
                } else if (barraNumeros.innerText == '123') {
                    barraNumeros.innerText += '4';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 123')
                }
            }
            break;
        case 'E-5':
            if (barraLetras.innerText == 'ABCDE') {
                swal('Ya esta la E')
            } else if (barraLetras.innerText == 'ABCD') {
                barraLetras.innerText += 'E'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC') {
                swal('Falta la letras ABCD')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12345') {
                    swal('El 5 ya esta')
                } else if (barraNumeros.innerText == '1234') {
                    barraNumeros.innerText += '5';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 1234')
                }
            }
            break;
        case 'F-6':
            if (barraLetras.innerText == 'ABCDEF') {
                swal('Ya esta la F')
            } else if (barraLetras.innerText == 'ABCDE') {
                barraLetras.innerText += 'F'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD') {
                swal('Falta la letras ABCDE')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123456') {
                    swal('El 6 ya esta')
                } else if (barraNumeros.innerText == '12345') {
                    barraNumeros.innerText += '6';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 12345')
                }
            }
            break;
        case 'G-7':
            if (barraLetras.innerText == 'ABCDEFG') {
                swal('Ya esta la G')
            } else if (barraLetras.innerText == 'ABCDEF') {
                barraLetras.innerText += 'G'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE') {
                swal('Falta la letras ABCDEF')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1234567') {
                    swal('El 7 ya esta')
                } else if (barraNumeros.innerText == '123456') {
                    barraNumeros.innerText += '7';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 123456')
                }
            }
            break;
        case 'H-8':
            if (barraLetras.innerText == 'ABCDEFGH') {
                swal('Ya esta la H')
            } else if (barraLetras.innerText == 'ABCDEFG') {
                barraLetras.innerText += 'H'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE' || barraLetras.innerText == 'ABCDEF') {
                swal('Falta la letras ABCDEF')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12345678') {
                    swal('El 8 ya esta')
                } else if (barraNumeros.innerText == '1234567') {
                    barraNumeros.innerText += '8';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
                else{
                    swal('Falta el 1234567')
                }
            }
            break;
        case 'I-9':
            if (barraLetras.innerText == 'ABCDEFGHI') {
                swal('Ya esta la I')
            } else if (barraLetras.innerText == 'ABCDEFGH') {
                barraLetras.innerText += 'I'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE' || barraLetras.innerText == 'ABCDEF' || barraLetras.innerText == 'ABCDEFH') {
                swal('Falta la letras ABCDEFH')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123456789') {
                    swal('El 9 ya esta')
                } else if (barraNumeros.innerText == '12345678') {
                    barraNumeros.innerText += '9';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }else{
                    swal('Falta el 12345678')
                }
            }
            break;
        case 'J-0':
            if (barraLetras.innerText == 'ABCDEFGHI') {
                barraLetras.innerText += 'J'
                localStorage.setItem('letras', barraLetras.innerText)
                swal("Buen Trabajo!", "Letras Completadas!", "success");
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE' || barraLetras.innerText == 'ABCDEF' || barraLetras.innerText == 'ABCDEFH' ||
                barraLetras.innerText == 'ABCDEFGHI') {
                swal('Falta la letras ABCDEFH')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if(barraNumeros.innerText=='1234567890'){
                    swal('Ya esta el 0')
                }else if (barraNumeros.innerText == '123456789') {
                    barraNumeros.innerText += '0';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                    swal("Buen Trabajo!", "Números Completados!", "success");
                    break;
                }
            }
            break;
        case '←':
            barraLetras.innerHTML=barraLetras.innerText.slice(0,-1);
            break;
        case 'Reseat':
            barraLetras.innerText = ''
            localStorage.setItem('letras', '')
            barraNumeros.innerText = ''
            localStorage.setItem('numeros', '')
        default:
    }
}

for (let i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('click', teclado)
}

