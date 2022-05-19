const fs = require('fs');
const path = require('path'); //Импорт всех требуемых модулей.
const {stdin, stdout, exit} = process;
const newName = path.join(__dirname, 'text.txt'); //Создание потока записи в текстовый файл
var readline = require('readline');

var rl = readline.createInterface({
    input: stdin,
    output: stdout,
    terminal: false
  });


stdout.write('Введите текст:\n'); //Вывод в консоль приветственного сообщения
rl.on('line', function(line){
    if (line === 'exit') {  //Ожидание ввода текста пользователем, с дальнейшей проверкой ввода на наличие ключевого слова exit
        exit();
    };
    fs.appendFile(newName, '\n'+line, error => {
     if (error) throw error; });
})

process.on('exit', () => {
    stdout.write('До свидания!\n');  //Реализация прощального сообщения при остановке процесса
});

process.on('SIGINT', () => {
    process.exit();
});
