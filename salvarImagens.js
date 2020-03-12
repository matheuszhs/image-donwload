const criarLista = (url, qtdPag) => {
	let arrayList = new Array()
	for (let i = 1; i <= qtdPag; i++) {
		arrayList.push(url + i + '.jpg')
	}
	return arrayList
}

let j = 0
let url = 'urlImage'
let pag = 310
let array = criarLista(url, pag)

const fazerDownload = () => {
	const download = require('image-downloader')

	/*const options = {
			url: array[j],
			dest: '\livro' // Diretório que será salvo
		}*/

	//download.image(options).then(({ filename, image }) => { console.log('Salvo como', filename) }).catch((err) => { console.error(err) })

	if(j == pag - 1){
		clearInterval(tempo)
	}
	j++

}

let tempo = setInterval(fazerDownload, 250)