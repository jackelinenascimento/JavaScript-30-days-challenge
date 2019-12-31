1º - Como checar a linha de comando que está "causando" aquele efeito na sua página:
- Inspecione,
- Clique com botão direito no "DOM"
- Clique em "Break on..."
- Clique "attribute modifications"
- Clique no elemento novamente e...
Aparecerá a linha do código! Maravilha de dica!

2º - Regular:
Utilize o console.log, salva muito durante o desenvovimento de aplicações!
- console.log

3º - Interpolated:
Interpolar dados no console.log => exemplo =>
- console.log('Hello I am a %s string!', '♡')

4ª - Styled:
Adicionar estilo no console.log:
- console.log('%c I am some great text', 'font-size: 50px; background:red; text-shadow: 10px 10px 0 blue')

5ª - Warning!
- console.warn()

6ª - Error :/
- console.error('Shit!')

7ª - Info
console.info('Crocodiles eat 3-4 people per year')

8ª - Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong!')

9ª - Clearing
Limpa o console
console.clear()

10ª - Viewing DOM elements
console.log(p)
console.dir(p)

11ª Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    console.log(...)
    console.log(...)
    console.group(`${dog.name}`)
})

12ª Counting
Mostra quantas vezes o comando foi executado
- console.count(...)

13ª Timing
ver quanto tempo demora para alguma operação
- console.time('fetching data')

14ª Table
Mostra os dados em uma tabela.
- console.table(array)

