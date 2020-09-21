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
            } else if (barraLetras.innerText == 'A') {
                alert('Ya esta la letra A')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1') {
                    alert('El 1 ya esta')
                } else if (barraNumeros.innerText == '') {
                    barraNumeros.innerText += '1';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'B-2':
            if (barraLetras.innerText == 'AB') {
                alert('Ya esta la B')
            } else if (barraLetras.innerText == 'A') {
                barraLetras.innerText += 'B'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '') {
                alert('Falta la letra A')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12') {
                    alert('El 2 ya esta')
                } else if (barraNumeros.innerText == '1') {
                    barraNumeros.innerText += '2';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'C-3':
            if (barraLetras.innerText == 'ABC') {
                alert('Ya esta la C')
            } else if (barraLetras.innerText == 'AB') {
                barraLetras.innerText += 'C'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A') {
                alert('Falta la letra AB')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123') {
                    alert('El 3 ya esta')
                } else if (barraNumeros.innerText == '12') {
                    barraNumeros.innerText += '3';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'D-4':
            if (barraLetras.innerText == 'ABCD') {
                alert('Ya esta la D')
            } else if (barraLetras.innerText == 'ABC') {
                barraLetras.innerText += 'D'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB') {
                alert('Falta la letras ABC')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1234') {
                    alert('El 4 ya esta')
                } else if (barraNumeros.innerText == '123') {
                    barraNumeros.innerText += '4';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'E-5':
            if (barraLetras.innerText == 'ABCDE') {
                alert('Ya esta la E')
            } else if (barraLetras.innerText == 'ABCD') {
                barraLetras.innerText += 'E'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC') {
                alert('Falta la letras ABCD')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12345') {
                    alert('El 5 ya esta')
                } else if (barraNumeros.innerText == '1234') {
                    barraNumeros.innerText += '5';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'F-6':
            if (barraLetras.innerText == 'ABCDEF') {
                alert('Ya esta la F')
            } else if (barraLetras.innerText == 'ABCDE') {
                barraLetras.innerText += 'F'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD') {
                alert('Falta la letras ABCDE')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123456') {
                    alert('El 6 ya esta')
                } else if (barraNumeros.innerText == '12345') {
                    barraNumeros.innerText += '6';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'G-7':
            if (barraLetras.innerText == 'ABCDEFG') {
                alert('Ya esta la G')
            } else if (barraLetras.innerText == 'ABCDEF') {
                barraLetras.innerText += 'G'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE') {
                alert('Falta la letras ABCDEF')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '1234567') {
                    alert('El 7 ya esta')
                } else if (barraNumeros.innerText == '123456') {
                    barraNumeros.innerText += '7';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'H-8':
            if (barraLetras.innerText == 'ABCDEFGH') {
                alert('Ya esta la H')
            } else if (barraLetras.innerText == 'ABCDEFG') {
                barraLetras.innerText += 'H'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE' || barraLetras.innerText == 'ABCDEF') {
                alert('Falta la letras ABCDEF')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '12345678') {
                    alert('El 8 ya esta')
                } else if (barraNumeros.innerText == '1234567') {
                    barraNumeros.innerText += '8';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'I-9':
            if (barraLetras.innerText == 'ABCDEFGHI') {
                alert('Ya esta la I')
            } else if (barraLetras.innerText == 'ABCDEFGH') {
                barraLetras.innerText += 'I'
                localStorage.setItem('letras', barraLetras.innerText)
            } else if (barraLetras.innerText == '' || barraLetras.innerText == 'A' || barraLetras.innerText == 'AB' || barraLetras.innerText == 'ABC' ||
                barraLetras.innerText == 'ABCD' || barraLetras.innerText == 'ABCDE' || barraLetras.innerText == 'ABCDEF' || barraLetras.innerText == 'ABCDEFH') {
                alert('Falta la letras ABCDEFH')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123456789') {
                    alert('El 9 ya esta')
                } else if (barraNumeros.innerText == '12345678') {
                    barraNumeros.innerText += '9';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                }
            }
            break;
        case 'J-0':
            if (barraLetras.innerText == 'ABCDEFGHI') {
                barraLetras.innerText += 'J'
                localStorage.setItem('letras', barraLetras.innerText)
                alert('Letras Completadas')
            }
            if (localStorage.getItem('letras') == 'ABCDEFGHIJ') {
                if (barraNumeros.innerText == '123456789') {
                    barraNumeros.innerText += '0';
                    localStorage.setItem('numeros', barraNumeros.innerText)
                    alert('Números completados')

                }
            }
            break;
        case '---':
            alert('No funcional')
            break;
        case 'Reseat':
            barraLetras.innerText = ''
            localStorage.setItem('letras', '')
            barraNumeros.innerText = ''
            localStorage.setItem('numeros','')
        default:
    }
}

for (let i = 0; i < tecla.length; i++) {
    tecla[i].addEventListener('click', teclado)
}