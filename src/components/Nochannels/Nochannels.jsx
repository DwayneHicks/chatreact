import React from 'react';

function Nochannels() {
  return (
    <div class="app__contentProfile noConnection">
      <div class="noConnection__container noConnection__container--minWidth">
        <div class="noConnection__text noConnection__text--minMarg">Не подкюченных каналов</div>
        <div class="noConnection__smallText noConnection__smallText--minMarg">Для продолжения работы подключите
        хотя бы один канал</div>
        <div class="noConnection__buttonsWrapper">
          <button class="noConnection__button active">Подключить</button>
        </div>
      </div>
    </div>
  )
}

export default Nochannels;