import React from 'react';

function ChatWindowAnswer() {
  return (
    <div className="chatWindowOuter">
      <div className="chatWindow">
        <div className="messageContentBoxWrapper">
          <div className="chatWindow">
            <div className="chatWindow__dateBox">
              <div className="chatWindow__date">12 сентября</div>
            </div>
          </div>
          <div className="chatMessgOuterPostWrapper">
            <div className="chatMessgOuterPost">
              <div className="chatMessgOuterPost__headerBox">
                <div className="chatMessgOuterPost__header">dietolog_kristina</div>
                <div className="chatMessgOuterPost__author">Пост</div>
              </div>
              <div className="chatMessgOuterPost__postBox">
                <img src="img/chat_post/img_1.jpg" alt="" className="chatMessgOuterPost__img"/>
                  <div className="chatMessgOuterPost__txt">Девочки очень важный пост, для тех, кто никак не может похудеть.</div>
                        </div>
              </div>
            </div>
            <div className="chatMessgOuter">
              <div className="chatMessg">
                <div className="chatMessg__user">ksusharekeda</div>
                <div className="messageRow">
                  <div className="message">
                    <div className="message__box">
                      <div className="message__text">Спасибо за ваш огромный труд</div>
                      <div className="message__date">17:56</div>
                    </div>
                    <div className="messageLikeOuter">
                      <svg className="messageLike" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5179 6.58559C3.0417 9.15092 7.04387 12.2745 7.99983 13C8.95579 12.2745 12.958 9.15092 14.4818 6.58577C14.4835 6.5829 14.4852 6.57986 14.4869 6.57683C14.8225 6.00478 15 5.34673 15 4.67348C15 2.64782 13.4074 1 11.4501 1C10.1471 1 8.95095 1.73673 8.32833 2.92284C8.26301 3.04748 8.13686 3.12491 8 3.12491C7.86314 3.12491 7.73699 3.04748 7.67167 2.92284C7.04905 1.73673 5.85289 1 4.54994 1C2.5924 1 1 2.64799 1 4.67348C1 5.34673 1.1773 6.00478 1.51306 6.57683C1.51444 6.57969 1.51617 6.58273 1.5179 6.58559Z"></path>
                      </svg>
                    </div>
                    <div className="message__btnDotted">
                      <div className="message__dottedWrapper">
                        <div className="message__dotted"></div>
                        <div className="message__dotted"></div>
                        <div className="message__dotted"></div>
                      </div>
                      <div className="message__dropBox">
                        <div className="message__dropRow">Удалить</div>
                        <div className="message__dropRow">Скрыть</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chatMessgAnswerOuter">
              <div className="messageLikeOuter">
                <svg className="messageLike" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5179 6.58559C3.0417 9.15092 7.04387 12.2745 7.99983 13C8.95579 12.2745 12.958 9.15092 14.4818 6.58577C14.4835 6.5829 14.4852 6.57986 14.4869 6.57683C14.8225 6.00478 15 5.34673 15 4.67348C15 2.64782 13.4074 1 11.4501 1C10.1471 1 8.95095 1.73673 8.32833 2.92284C8.26301 3.04748 8.13686 3.12491 8 3.12491C7.86314 3.12491 7.73699 3.04748 7.67167 2.92284C7.04905 1.73673 5.85289 1 4.54994 1C2.5924 1 1 2.64799 1 4.67348C1 5.34673 1.1773 6.00478 1.51306 6.57683C1.51444 6.57969 1.51617 6.58273 1.5179 6.58559Z"></path>
                </svg>
              </div>
              <div className="chatMessgAnswer">
                <div className="chatMessgAnswer__name">ksusharekeda</div>
                <div className="chatMessgAnswer__messBoxOuter">
                  <div className="chatMessgAnswer__messBoxError">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" className="chatMessgAnswer__errorSvg" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.6514 17.9423L13.7527 1.00144C13.3905 0.38169 12.7213 0 11.997 0C11.2728 0 10.6036 0.38169 10.2413 1.00144L0.271478 18.0642C-0.0904928 18.6839 -0.0904928 19.4473 0.271478 20.0671C0.633739 20.6868 1.30295 21.0685 2.02718 21.0685H21.9672H21.973C23.0925 21.0685 24 20.1718 24 19.0656C23.9997 18.6493 23.8714 18.2625 23.6514 17.9423ZM11.9999 5.89245C12.6254 5.89245 13.1328 6.39346 13.1328 7.01177L12.8432 13.6873C12.8142 14.2911 12.3393 14.5205 11.9999 14.5205C11.6197 14.5205 11.19 14.3225 11.1567 13.6873L10.8671 7.01177C10.8671 6.39346 11.3744 5.89245 11.9999 5.89245ZM11.9999 18.3226C12.3819 18.3226 12.7554 18.1709 13.0221 17.9048C13.2943 17.6387 13.4478 17.2696 13.4478 16.8919C13.4478 16.5171 13.2943 16.148 13.0221 15.8819C12.7554 15.6158 12.3819 15.4613 11.9999 15.4613C11.6177 15.4613 11.2441 15.6158 10.9748 15.8819C10.7055 16.148 10.552 16.5143 10.552 16.8919C10.552 17.2696 10.7055 17.6387 10.9748 17.9048C11.2441 18.1709 11.6177 18.3226 11.9999 18.3226Z" fill="#FA0032" />
                    </svg>
                  </div>
                  <div className="chatMessgAnswer__messBox">
                    <div className="chatMessgAnswer__mess">Спасибо вам. Держите себя в форме</div>
                    <div className="chatMessgAnswer__date">17:56</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
  
export default ChatWindowAnswer;