import React from 'react';
import item_2 from './../../img/chat/item_2.jpg'; // relative path to image
import item_1 from './../../img/chat/item_1.jpg'; // relative path to image
import Header from '../Header/Header';
import ChatInput from '../ChatInput/ChatInput';

function Content() {
  return (
    <div className="app__asideChatWindow asideChatWindow">
    <Header/>
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
      <ChatInput/>
    </div>
    
  )
}

export default Content;