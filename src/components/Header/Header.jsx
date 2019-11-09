import React from 'react';

function Header() {
  return (
    <div className="asideChatWindow__topHeaderWrapperBox">
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
    </div>
  )
}

export default Header;