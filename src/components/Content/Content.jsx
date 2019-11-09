import React from 'react';
import item_2 from './../../img/chat/item_2.jpg'; // relative path to image
import item_1 from './../../img/chat/item_1.jpg'; // relative path to image

function Content() {
  return (
    <div className="app__asideChatWindow asideChatWindow">
      <div className="asideChatWindow__topHeader">
        <div className="tabNavWrapper">
          <ul className="tabNav">
            <li className="tabNav__item active">
              <div className="tabNav__itemTxt">Важные</div>
              <div className="tabNav__itemNum">12</div>
            </li>
            <li className="tabNav__item">
              <div className="tabNav__itemTxt">Неотвеченные</div>
              <div className="tabNav__itemNum">256</div>
            </li>
            <li className="tabNav__item">
              <div className="tabNav__itemTxt">История</div>
              <div className="tabNav__itemNum">1048</div>
            </li>
            <li className="tabNav__item">
              <div className="tabNav__itemTxt">Скрытые</div>
              <div className="tabNav__itemNum">2568</div>
            </li>
          </ul>
          <div className="itemSelect">
            <div className="globalSettingsSelect">
              <select>
                <option defaultValue="0">Фильтр</option>
                <option defaultValue="1">Фильтр 1</option>
                <option defaultValue="2">Фильтр 2</option>
                <option defaultValue="3">Настроить</option>
              </select>
            </div>
          </div>
        </div>
        <div className="tabStat" id="tabStat">
          <div className="tabStat__box">
            <div className="tabStat__wrapper" id="tabStat__wrapper">
              <div className="tabStat__text">Статистика</div>
              <div className="tabStat__btnStatus"></div>
            </div>
            <div className="tabStat__statBoxWrapper" id="tabStat__statBoxWrapper">
              <div className="tabStat__col tabStat__col--num">
                <div className="tabStat__boxWrap">
                  <div className="tabStat__smallText">Отвеченно</div>
                  <div className="tabStat__num">157<span>/300</span></div>
                  <div className="tabStat__loadBox">
                    <svg className="tabStat__loading" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.083 9H0.062H0V14L1.481 12.639C2.932 14.673 5.311 16 8 16C12.08 16 15.446 12.946 15.938 9H13.917C13.441 11.838 10.973 14 8 14C5.894 14 4.04 12.914 2.97 11.271L5.441 9H2.083Z"></path>
                      <path d="M8.00001 0C3.92001 0 0.554012 3.054 0.0620117 7H2.08301C2.55901 4.162 5.02701 2 8.00001 2C10.169 2 12.07 3.151 13.124 4.876L11 7H13H13.917H15.938H16V2L14.568 3.432C13.123 1.357 10.72 0 8.00001 0Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="tabStat__col tabStat__col--lineStat">
                <div className="tabStat__row">
                  <div className="tabStat__rowTxtBox">
                    <div className="tabStat__rowTxt">Доступно лайков</div>
                    <div className="tabStat__rowNum">154</div>
                  </div>
                  <div className="tabStat__lineBox">
                    <div className="tabStat__lineLike tabStat__lineLike--likes"></div>
                  </div>
                </div>
                <div className="tabStat__row">
                  <div className="tabStat__rowTxtBox">
                    <div className="tabStat__rowTxt">Доступно сообщ. в директ</div>
                    <div className="tabStat__rowNum">542</div>
                  </div>
                  <div className="tabStat__lineBox">
                    <div className="tabStat__lineLike tabStat__lineLike--mess"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabStat__iconBtn" id="tabStat__iconBtn">
            <div className="tabStat__line tabStat__lineHor"></div>
            <div className="tabStat__line tabStat__lineVer"></div>
          </div>
        </div>
      </div>
      <div className="asideChatWindow__topLine" id="asideChatWindow__topLine">
        <div className="asideChatWindow__lftLine">
          <svg className="asideChatWindow__svgLine" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.99998 0C7.28412 0 6.94362 0.0115116 5.87701 0.0601777C4.81259 0.108764 4.08569 0.277786 3.44958 0.525007C2.79199 0.780564 2.23432 1.1225 1.67839 1.67843C1.12246 2.23436 0.780524 2.79203 0.524967 3.44962C0.277746 4.08573 0.108725 4.81263 0.060138 5.87705C0.0114719 6.94362 0 7.28416 0 10C0 12.7159 0.0114719 13.0564 0.060138 14.123C0.108725 15.1874 0.277746 15.9143 0.524967 16.5504C0.780524 17.208 1.12246 17.7657 1.67839 18.3216C2.23432 18.8775 2.79199 19.2195 3.44958 19.475C4.08569 19.7223 4.81259 19.8913 5.87701 19.9399C6.94362 19.9885 7.28412 20 9.99998 20C12.7158 20 13.0564 19.9885 14.1229 19.9399C15.1874 19.8913 15.9143 19.7223 16.5504 19.475C17.208 19.2195 17.7656 18.8775 18.3216 18.3216C18.8775 17.7657 19.2194 17.208 19.475 16.5504C19.7222 15.9143 19.8912 15.1874 19.9398 14.123C19.9885 13.0564 20 12.7159 20 10C20 7.28416 19.9885 6.94362 19.9398 5.87705C19.8912 4.81263 19.7222 4.08573 19.475 3.44962C19.2194 2.79203 18.8775 2.23436 18.3216 1.67843C17.7656 1.1225 17.208 0.780564 16.5504 0.525007C15.9143 0.277786 15.1874 0.108764 14.1229 0.0601777C13.0564 0.0115116 12.7158 0 9.99998 0ZM9.99998 1.80184C12.6701 1.80184 12.9864 1.812 14.0408 1.86011C15.0158 1.90461 15.5453 2.06752 15.8977 2.20443C16.3644 2.38583 16.6976 2.60257 17.0475 2.95248C17.3974 3.30239 17.6142 3.63555 17.7955 4.10229C17.9325 4.4547 18.0954 4.98419 18.1399 5.95914C18.188 7.01364 18.1982 7.32989 18.1982 10C18.1982 12.6701 18.188 12.9864 18.1399 14.0409C18.0954 15.0158 17.9325 15.5453 17.7955 15.8978C17.6142 16.3645 17.3974 16.6976 17.0475 17.0476C16.6976 17.3975 16.3644 17.6142 15.8977 17.7956C15.5453 17.9325 15.0158 18.0954 14.0408 18.1399C12.9865 18.188 12.6703 18.1982 9.99998 18.1982C7.32969 18.1982 7.01344 18.188 5.95914 18.1399C4.98415 18.0954 4.45466 17.9325 4.10229 17.7956C3.63551 17.6142 3.30235 17.3975 2.95244 17.0476C2.60253 16.6976 2.38579 16.3645 2.20443 15.8978C2.06748 15.5453 1.90457 15.0158 1.86007 14.0409C1.81196 12.9864 1.8018 12.6701 1.8018 10C1.8018 7.32989 1.81196 7.01364 1.86007 5.95918C1.90457 4.98419 2.06748 4.4547 2.20443 4.10229C2.38579 3.63555 2.60253 3.30239 2.95244 2.95248C3.30235 2.60257 3.63551 2.38583 4.10229 2.20443C4.45466 2.06752 4.98415 1.90461 5.9591 1.86011C7.0136 1.812 7.32985 1.80184 9.99998 1.80184ZM4.86483 10C4.86483 7.16397 7.16393 4.86487 9.99998 4.86487C12.836 4.86487 15.1351 7.16397 15.1351 10C15.1351 12.8361 12.836 15.1352 9.99998 15.1352C7.16393 15.1352 4.86483 12.8361 4.86483 10ZM9.99998 13.3334C8.15904 13.3334 6.66663 11.841 6.66663 10C6.66663 8.15908 8.15904 6.66667 9.99998 6.66667C11.8409 6.66667 13.3333 8.15908 13.3333 10C13.3333 11.841 11.8409 13.3334 9.99998 13.3334ZM15.338 5.86201C16.0008 5.86201 16.538 5.32474 16.538 4.66199C16.538 3.99924 16.0008 3.462 15.338 3.462C14.6753 3.462 14.138 3.99924 14.138 4.66199C14.138 5.32474 14.6753 5.86201 15.338 5.86201Z"></path>
          </svg>
          <svg className="asideChatWindow__svgLine" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.0633 13.4406C14.8324 14.0134 13.7878 14.5358 13.3269 14.5596C12.866 14.5844 12.8531 14.9171 10.3427 13.8264C7.83319 12.7358 6.32308 10.0834 6.20393 9.91202C6.08479 9.74246 5.23137 8.52626 5.27755 7.30272C5.32373 6.07919 5.99427 5.50179 6.23349 5.26166C6.47178 5.02062 6.7461 4.96838 6.91327 4.9748C7.08045 4.98121 7.2467 5.00871 7.39263 5.01329C7.53948 5.01879 7.75099 4.94455 7.94126 5.44955C8.1306 5.95546 8.58594 7.19732 8.64413 7.3238C8.70232 7.4512 8.73834 7.59784 8.64875 7.76006C8.55823 7.9232 8.51298 8.02493 8.38182 8.16607C8.25159 8.3063 8.10659 8.48043 7.98929 8.58766C7.85906 8.70681 7.72328 8.83604 7.8609 9.09083C7.9976 9.3447 8.46957 10.1778 9.18999 10.8652C10.1145 11.7469 10.9125 12.0401 11.1582 12.174C11.4048 12.3078 11.5517 12.2931 11.7041 12.1318C11.8565 11.9714 12.358 11.4288 12.5344 11.1869C12.7108 10.944 12.8761 10.9917 13.1034 11.0833C13.3296 11.175 14.5387 11.822 14.7843 11.9558C15.0309 12.0896 15.1953 12.1584 15.2545 12.2638C15.3126 12.3701 15.2942 12.8677 15.0633 13.4406ZM10.182 19.4849C8.46033 19.4849 6.84308 19.0441 5.43641 18.2724L0 20L1.77242 14.7732C0.87836 13.304 0.363905 11.5828 0.363905 9.74246C0.363905 4.36165 4.7594 0 10.182 0C15.6036 0 20 4.36165 20 9.74246C20 15.1224 15.6036 19.4849 10.182 19.4849ZM10.182 1.63138C5.6747 1.63138 2.00794 5.26991 2.00794 9.74246C2.00794 11.5168 2.58613 13.1601 3.56516 14.4973L2.54364 17.5089L5.68486 16.5118C6.97515 17.3586 8.52129 17.8526 10.182 17.8526C14.6883 17.8526 18.355 14.2141 18.355 9.74246C18.355 5.26991 14.6883 1.63138 10.182 1.63138Z" fill="#9F9F9F"></path>
          </svg>
          <div className="asideChatWindow__lineTxt">ksusharekeda</div>
          <div className="asideChatWindow__btnDotted" id="asideChatWindow__btnDotted">
            <div className="asideChatWindow__dottedWrapper">
              <div className="asideChatWindow__dotted"></div>
              <div className="asideChatWindow__dotted"></div>
              <div className="asideChatWindow__dotted"></div>
            </div>
            <div className="asideChatWindow__dropBox">
              <div className="asideChatWindow__dropRow">Бан</div>
              <div className="asideChatWindow__dropRow">Скрывать все комментарии</div>
            </div>
          </div>
        </div>
        <div className="asideChatWindow__rightLine">
          <div className="asideChatWindow__btn active">Комментарии 2</div>
          <div className="asideChatWindow__btn">Директ 1</div>
        </div>
      </div>
      <div className="chatWindowOuter">
        <div className="chatWindow">
          <div className="chatWindow__dateBox">
            <div className="chatWindow__date">12 сентября</div>
          </div>
          <div className="messageContentBoxWrapper">
            <div className="messageContentBox">
              <div className="messageContentBox__colImg"><img className="messageContentBox__img" alt={item_1} src={item_1} /></div>
              <div className="messageContentBox__colTxt">
                <div className="messageContentBox__chatNameHeader">
                  <div className="messageContentBox__chatName">dietolog_kristina</div>
                  <div className="messageContentBox__chatPost">Пост</div>
                </div>
                <div className="messageContentBox__text">Девочки очень важный пост, для тех, кто никак не может похудеть.</div>
                <div className="messageContentBox__chatNameAnswer">ksusharekeda</div>
                <div className="messageContentBox__answerBox">
                  <div className="messageContentBox__answer">Спасибо за ваш огромный труд</div>
                  <div className="messageContentBox__date">17:56</div>
                </div>
              </div>
              <div className="messageContentBox__status"></div>
            </div>
            <div className="messageContentBox messageContentBox--open">
              <div className="messageContentBox__colImg"><img className="messageContentBox__img" alt={item_2} src={item_2} /></div>
              <div className="messageContentBox__colTxt">
                <div className="messageContentBox__chatNameHeader">
                  <div className="messageContentBox__chatName">dietolog_kristina</div>
                  <div className="messageContentBox__chatPost">Сториз</div>
                </div>
                <div className="messageContentBox__text">Одно из моих любимых мест в Москве</div>
                <div className="messageContentBox__chatNameAnswer">ksusharekeda</div>
                <div className="messageContentBox__answerBox">
                  <div className="messageContentBox__answer">Спасибо за ваш огромный труд</div>
                  <div className="messageContentBox__date">17:56</div>
                </div>
              </div>
              <div className="messageContentBox__status"></div>
            </div>
            <div className="messageContentBox messageContentBox--open">
              <div className="messageContentBox__colImg"><img className="messageContentBox__img" alt={item_1} src={item_1} /></div>
              <div className="messageContentBox__colTxt">
                <div className="messageContentBox__chatNameHeader">
                  <div className="messageContentBox__chatName">dietolog_kristina</div>
                  <div className="messageContentBox__chatPost">Пост</div>
                </div>
                <div className="messageContentBox__text">Девочки очень важный пост, для тех, кто никак не может похудеть.</div>
                <div className="messageContentBox__chatNameAnswer">ksusharekeda</div>
                <div className="messageContentBox__answerBox">
                  <div className="messageContentBox__answer">Спасибо за ваш огромный труд</div>
                  <div className="messageContentBox__date">17:56</div>
                </div>
              </div>
              <div className="messageContentBox__status"></div>
            </div>
            <div className="messageContentBox messageContentBox--new">
              <div className="messageContentBox__colImg"><img className="messageContentBox__img" alt={item_1} src={item_1} /></div>
              <div className="messageContentBox__colTxt">
                <div className="messageContentBox__chatNameHeader">
                  <div className="messageContentBox__chatName">dietolog_kristina</div>
                  <div className="messageContentBox__chatPost">Пост</div>
                </div>
                <div className="messageContentBox__text">Девочки очень важный пост, для тех, кто никак не может похудеть.</div>
                <div className="messageContentBox__closeMesssageBtn">
                  <div className="messageContentBox__closeMesssageDotted">...</div>
                </div>
                <div className="messageContentBox__answerBoxWrapper">
                  <div className="messageContentBox__answerBox messageContentBox__answerBox--close">
                    <div className="messageContentBox__answer">@ksusharekeda Всегда пожалуйста!</div>
                    <div className="messageContentBox__date">17:56</div>
                  </div>
                </div>
              </div>
              <div className="messageContentBox__status"></div>
            </div>
          </div>
          <div className="downloadMore">
            <button className="downloadMore__btn">
              <div className="downloadMore__text">Загрузить старые</div>
              <div className="downloadMore__num">148</div>
            </button>
          </div>
        </div>
      </div>
      <div className="chatInputWrapper">
        <div className="chatInput">
          <div className="chatInput__colRow">
            <div className="chatInput__col chatInput__colInput" id="chatInput__colInput">
              <div id="chatInput__smileBox" className="chatInput__smileBox width">
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😀">😀</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😀">😃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😁">😁</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😆">😆</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😅">😅</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😂">😂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🤣">🤣</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😊">😊</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😇">😇</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙂">🙂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙃">🙃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😉">😉</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😌">😌</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😍">😍</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🥰">🥰</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😗">😗</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😙">😙</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😋">😋</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😛">😛</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😀">😀</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😃">😃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😁">😁</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😆">😆</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😅">😅</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😂">😂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🤣">🤣</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😊">😊</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😇">😇</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙂">🙂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙃">🙃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😉">😉</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😌">😌</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😍">😍</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🥰">🥰</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😗">😗</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😙">😙</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😋">😋</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😛">😛</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😀">😀</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😃">😃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😁">😁</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😆">😆</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😅">😅</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😂">😂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🤣">🤣</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😊">😊</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😇">😇</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙂">🙂</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🙃">🙃</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😉">😉</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😌">😌</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😍">😍</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="🥰">🥰</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😗">😗</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😙">😙</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😋">😋</span></div>
                </div>
                <div className="chatInput__smileBoxing">
                  <div className="chatInput__smile"><span role="img" aria-label="😛">😛</span></div>
                </div>
              </div>
            </div>
            <div className="chatInput__col chatInput__colButtons">
              <div className="interfaceButtons">
                <div className="interfaceButtons__svgBox width" id="btnArrow">
                  <svg className="interfaceButtons__svg interfaceButtons__svg--arrow" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="interfaceButtons__svg--arrow">
                    <path className="round" d="M19 10.2727C19 15.2433 14.9706 19.2727 10 19.2727C5.02944 19.2727 1 15.2433 1 10.2727C1 5.30217 5.02944 1.27274 10 1.27274C14.9706 1.27274 19 5.30217 19 10.2727Z" stroke="#979797" strokeWidth="2"></path>
                    <path className="circle" fillRule="evenodd" clipRule="evenodd" d="M6.2998 10.3818L10.0045 14.5805C10.6141 15.2713 11.7544 14.8402 11.7544 13.9189V6.84478C11.7544 5.92346 10.6141 5.49232 10.0045 6.18316L6.2998 10.3818Z"></path>
                  </svg>
                </div>
                <div className="interfaceButtons__svgBox" id="btnSmile">
                  <svg className="interfaceButtons__svg interfaceButtons__svg--smile" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" id="interfaceButtons__svg--smile"><path d="M19 10.2727C19 15.2433 14.9706 19.2727 10 19.2727C5.02944 19.2727 1 15.2433 1 10.2727C1 5.30217 5.02944 1.27273 10 1.27273C14.9706 1.27273 19 5.30217 19 10.2727Z" strokeWidth="2" />
                    <path className="ices" fillRule="evenodd" clipRule="evenodd" d="M6.59091 9.36363C7.46954 9.36363 8.18182 8.65136 8.18182 7.77273C8.18182 6.89409 7.46954 6.18182 6.59091 6.18182C5.71227 6.18182 5 6.89409 5 7.77273C5 8.65136 5.71227 9.36363 6.59091 9.36363Z" />
                    <path className="ices" fillRule="evenodd" clipRule="evenodd" d="M13.4091 9.36363C14.2877 9.36363 15 8.65136 15 7.77273C15 6.89409 14.2877 6.18182 13.4091 6.18182C12.5305 6.18182 11.8182 6.89409 11.8182 7.77273C11.8182 8.65136 12.5305 9.36363 13.4091 9.36363Z" />
                    <path d="M6.36364 12.8182C6.36364 12.8182 8 14.6364 10 14.6364C12 14.6364 13.6364 12.8182 13.6364 12.8182" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="interfaceButtons__svgBox" id="btnEdit">
                  <svg className="interfaceButtons__svg interfaceButtons__svg--shape" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24.0014 0C18.4778 0 14.0014 4.47679 14.0014 10C14.0014 15.5236 18.4781 20 24.0014 20C29.5249 20 34.0014 15.5232 34.0014 10C34.0014 4.47642 29.5246 0 24.0014 0ZM0 3C0 3.55228 0.447715 4 1 4H10.0027C10.555 4 11.0027 3.55228 11.0027 3C11.0027 2.44772 10.555 2 10.0027 2H1C0.447715 2 0 2.44772 0 3ZM4 17C4 17.5523 4.44771 18 5 18H10.0027C10.555 18 11.0027 17.5523 11.0027 17C11.0027 16.4477 10.555 16 10.0027 16H5C4.44771 16 4 16.4477 4 17ZM3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H10.0027C10.555 9 11.0027 9.44772 11.0027 10C11.0027 10.5523 10.555 11 10.0027 11H3ZM16.0014 10C16.0014 14.419 19.5827 18 24.0014 18C28.4203 18 32.0014 14.4187 32.0014 10C32.0014 5.58103 28.42 2 24.0014 2C19.5824 2 16.0014 5.58133 16.0014 10ZM25.0014 10.0858V6.5C25.0014 5.94772 24.5536 5.5 24.0014 5.5C23.4491 5.5 23.0014 5.94772 23.0014 6.5V10.5C23.0014 10.7652 23.1067 11.0196 23.2942 11.2071L25.7942 13.7071C26.1848 14.0976 26.8179 14.0976 27.2085 13.7071C27.599 13.3166 27.599 12.6834 27.2085 12.2929L25.0014 10.0858Z" fill="#939393"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="chatInput__colRow chatInput__colRow--withoutMargin">
            <div className="chatInput__colFileIcon">
              <label className="iconFileLabel" htmlFor="inputSvgFile">
                <svg className="iconFile" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" id="iconFile">
                  <path d="M13.3062 7.14608C13.6837 6.76859 13.6837 6.15663 13.3062 5.77897C12.9287 5.40148 12.3166 5.40148 11.9391 5.77897L4.11577 13.6023C2.9301 14.7881 2.9301 16.7175 4.11594 17.9032C4.70877 18.496 5.48758 18.7925 6.26622 18.7925C7.04503 18.7925 7.82384 18.496 8.41667 17.9032L12.1551 14.1649L12.1553 14.1648L18.4477 7.87219C20.2462 6.07371 20.2462 3.1473 18.4477 1.34883C16.6492 -0.449652 13.7228 -0.449484 11.9243 1.34883L3.2861 9.98705C3.27049 10.0025 3.25656 10.0191 3.24229 10.0354L1.826 11.4517C0.662323 12.6154 0.0214844 14.1681 0.0214844 15.8236C0.0214844 17.4791 0.662323 19.0316 1.826 20.1953C2.98969 21.359 4.54227 21.9998 6.19774 21.9998C7.85321 21.9998 9.40596 21.359 10.5696 20.1953L17.692 13.0729C18.0695 12.6954 18.0695 12.0833 17.692 11.7058C17.3146 11.3281 16.7024 11.3281 16.3249 11.7058L9.20236 18.8282C8.40392 19.6268 7.33691 20.0664 6.19774 20.0664C5.05856 20.0664 3.99156 19.6268 3.19312 18.8282C2.3945 18.0298 1.95474 16.9626 1.95474 15.8236C1.95474 14.6844 2.3945 13.6174 3.19312 12.8188L10.3155 5.69639C10.3311 5.68078 10.3452 5.66416 10.3595 5.64771L13.2913 2.71594C14.336 1.67126 16.0359 1.67126 17.0804 2.71577C18.1251 3.76045 18.1251 5.4604 17.0804 6.50508L14.8732 8.71226C14.8731 8.71243 14.8729 8.71259 14.8727 8.71276L7.04956 16.5361C6.61769 16.968 5.91492 16.968 5.48305 16.5361C5.05101 16.1042 5.05101 15.4015 5.48305 14.9694L13.3062 7.14608Z"></path>
                </svg>
              </label>
              <input type="file" id="inputSvgFile" />
            </div>
            <div className="chatInput__colField">
              <textarea className="inputTextChat" rows="10" cols="45" name="text" id="inputTextChat" defaultValue="Написать сообщение"></textarea>
            </div>
            <div className="chatInput__colNum">
              <div className="chatInputNum">0</div>
            </div>
            <div className="chatInput__colButtonsChat">
              <div className="chatInput__buttonWrapper">
                <button className="chatInput__button chatInput__button--gray">В директ</button>
                <button className="chatInput__button active">Отправить</button>
              </div>
            </div>
          </div>
          <div className="chatInput__btnDotted" id="chatInput__btnDotted">
            <div className="chatInput__dottedWrapper">
              <div className="chatInput__dotted"></div>
              <div className="chatInput__dotted"></div>
              <div className="chatInput__dotted"></div>
            </div>
            <div className="chatInput__dropBox" id="chatInput__dropBox">
              <div className="chatInput__dropRow">Скрыть переписку</div>
              <div className="chatInput__dropRow">Сохранить как быстрый ответ</div>
            </div>
          </div>
          <div className="chatDropEditMess" id="chatDropEditMess">
            <div className="chatDropEditMessInner">
              <div className="chatDropEditMess__col chatDropEditMess__col--left">
                <div className="chatDropEditMess__addBtnBox">
                  <div className="chatDropEditMess__addBtn">+ Добавить ответ</div>
                  <div className="chatDropEditMess__addSvg"></div>
                </div>
                <div className="chatDropEditMess__textRowBox">
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/пока</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/привет</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/пока</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/привет</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/пока</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow">
                    <div className="chatDropEditMess__text">/привет</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="chatDropEditMess__col chatDropEditMess__col--right">
                <div className="chatDropEditMess__textRowBoxing">
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">До свидания!</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">Остались ли у Вас ещё вопосы?</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">Спасибо за Ваше обращение, если будут ещё вопросы, обращайтесь!</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">До свидания!</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">Остались ли у Вас ещё вопосы?</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                  <div className="chatDropEditMess__textRow chatDropEditMess__textRow--padding">
                    <div className="chatDropEditMess__text">Спасибо за Ваше обращение, если будут ещё вопросы, обращайтесь!</div>
                    <svg width="11" height="11" viewBox="0 0 11 11" className="chatDropEditMess__textSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11V8.5L6.5 2L8.5 4L2 10.5L0 11Z" fill="#286EFA" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M7 1.5L8.5 0L10.5 2L9 3.5L7 1.5Z" fill="#286EFA" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;