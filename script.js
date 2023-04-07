/* Новые элементы должны добавляться в список по нажатию на Enter */

const sendInput = document.querySelector('#input'); //тексовое поле для ввода пункта списка
const itemsContainer = document.querySelector('.items'); //контейнер с новыми пунктами


sendInput.addEventListener('keydown', function(event) {
    const itemText = sendInput.value; //взять текст из поля input, обратившись к его свойству value, и сохраним в переменной itemText
    const newItem = document.createElement('div'); //создаём новый элемент div, что является заготовкой для пункта списка, который выведем в интерфейсе

    newItem.classList.add('items'); //добавим класс items для элемента newItem из таблицы стилей
    newItem.textContent = itemText; //с помощью свойства textContent укажем новому элементу, введённый пользователем пункт списка

      newItem.addEventListener('click', function() { //зачеркнуть пункт списка
        newItem.classList.toggle('done');
    });
    
    if (event.key == 'Enter' && itemText != '') { //проверка наличия текста в поле перед добавлением пункт списка
        itemsContainer.append(newItem);
        sendInput.value = ''; //очистка input после добавления нового элемента в список
    }

});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
