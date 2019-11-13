import React from 'react';
import moderation from './../../img/moderation/moderation.png'; // relative path to image

function Moderation() {
  return (
    <div class="app__contentProfile noConnection">
      <div class="noConnection__container noConnection__container--moderation">
        <div class="noConnection__iconBox">
          <img class="noConnection__icon" src={moderation} />
        </div>
        <div class="noConnection__text">Автоматическая модерация комментариев</div>
        <div class="noConnection__smallText">
          Автоматическая модерация позволяет удалять спам, сообщения троллей,
                выделять важные сообщения и группировать их в категории
        </div>
        <div class="noConnection__buttonsWrapper">
          <button class="noConnection__button active">Подключить</button>
        </div>
      </div>
    </div>

  )
}

export default Moderation;