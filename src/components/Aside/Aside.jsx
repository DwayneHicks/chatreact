import React from 'react';
import Content from '../../components/Content/Content';
import logo from './../../img/svg/logosource.svg'; // relative path to image 
import icon_1 from './../../img/photo/icon_1.png'; // relative path to image 
import icon_2 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_3 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_4 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_5 from './../../img/photo/icon_2.png'; // relative path to image 

function Aside() {
    return (
      <div className="app__container">
        <div className="app__asideNav asideNav">
            <div className="asideNav__topOuter">
                <div className="asideNav__svgBox asideNav__svgBox--1">
                    <img src={logo} alt={logo} className="asideNav__svg asideNav__svg--1" />
                </div>
                <div className="asideNav__svgBox asideNav__svgBox--2">
                    <svg className="asideNav__svg asideNav__svg--2" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.96252 0.733337H27.0506L31.2701 9.87556L30.9998 20.4171C30.9544 22.188 29.5057 23.6 27.7342 23.6H4.20009C2.46098 23.6 1.02678 22.2375 0.937709 20.5006L0.3927 9.87297L4.96252 0.733337ZM1.80416 9.73334H4.62918L6.62918 5.73334H24.7042L26.7042 9.73334H29.8828L26.2828 1.93334H5.70416L1.80416 9.73334ZM9.6 9.73334H5.97082L7.37082 6.93334H23.9625L25.3625 9.73334H21.7333V10.3333C21.7333 12.2187 19.0563 14.4 16 14.4C12.5073 14.4 9.6 12.5243 9.6 10.3333V9.73334ZM30.0425 10.9333H22.877C22.4304 13.334 19.3894 15.6 16 15.6C12.2031 15.6 8.88216 13.6241 8.448 10.9333H1.64865L2.13613 20.4392C2.19248 21.538 3.09984 22.4 4.20009 22.4H27.7342C28.8549 22.4 29.7714 21.5067 29.8002 20.3863L30.0425 10.9333ZM23.6667 4.6H7.66667C7.3353 4.6 7.06667 4.33138 7.06667 4C7.06667 3.66863 7.3353 3.4 7.66667 3.4H23.6667C23.998 3.4 24.2667 3.66863 24.2667 4C24.2667 4.33138 23.998 4.6 23.6667 4.6Z"></path>
                    </svg>
                    <div className="asideNav__text">Все</div>
                </div>
                <div className="asideNav__svgBox asideNav__svgBox--3">
                    <svg className="asideNav__svg asideNav__svg--3" width="40" height="48" viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 10C10 8.89543 10.8954 8 12 8H34.6667C35.7712 8 36.6667 8.89543 36.6667 10V29C36.6667 30.1046 35.7712 31 34.6667 31H28.75L27.0833 37.5L22.0833 31H12C10.8954 31 10 30.1046 10 29V10Z" stroke="#222222" strokeWidth="1.8"></path>
                        <path d="M9.99998 25H5.58331C5.03103 25 4.58331 25.4477 4.58331 26V36.5C4.58331 37.0523 5.03103 37.5 5.58331 37.5H8.33331L9.16665 43L13.75 37.5H19C19.5523 37.5 20 37.0523 20 36.5V31" stroke="#222222" strokeWidth="1.8"></path>
                        <path d="M14.5833 17H25.4166" stroke="#222222" strokeWidth="1.8" strokeLinecap="round"></path>
                        <path d="M14.5833 22.5H31.6666" stroke="#222222" strokeWidth="1.8" strokeLinecap="round"></path>
                    </svg>
                    <div className="asideNav__text">Директ</div>
                </div>
                <div className="asideNav__svgBox asideNav__svgBox--4">
                    <svg className="asideNav__svg asideNav__svg--4" width="30" height="39" viewBox="0 0 30 39" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.00002 0.333374H25C27.2552 0.333374 29.0834 2.16154 29.0834 4.41671V34.4167C29.0834 36.6719 27.2552 38.5 25 38.5H5.00002C2.74486 38.5 0.916687 36.6719 0.916687 34.4167V4.41671C0.916687 2.16154 2.74486 0.333374 5.00002 0.333374ZM5.00002 1.83337C3.57328 1.83337 2.41669 2.98997 2.41669 4.41671V34.4167C2.41669 35.8434 3.57328 37 5.00002 37H25C26.4268 37 27.5834 35.8434 27.5834 34.4167V4.41671C27.5834 2.98997 26.4268 1.83337 25 1.83337H5.00002ZM7.7778 4.41671H23.0556C24.5834 4.41671 25.8334 5.66671 25.8334 7.19449V22.4723C25.8334 24 24.5834 25.25 23.0556 25.25H7.7778C6.25002 25.25 5.00002 24 5.00002 22.4723V7.19449C5.00002 5.66671 6.25002 4.41671 7.7778 4.41671ZM23.0556 5.8056H7.7778C7.01391 5.8056 6.38891 6.4306 6.38891 7.19449V19.8565L13.8658 15.3889C13.8658 15.3658 13.8889 15.3658 13.8889 15.3658C13.9005 15.3658 13.9121 15.36 13.9236 15.3542C13.9352 15.3484 13.9468 15.3426 13.9584 15.3426C13.9699 15.3426 13.9815 15.3368 13.9931 15.3311C14.0047 15.3253 14.0162 15.3195 14.0278 15.3195C14.0509 15.2963 14.0741 15.2963 14.0972 15.2963H14.1667H14.2361H14.3056H14.375C14.3982 15.3195 14.4213 15.3195 14.4445 15.3195C14.456 15.3195 14.4676 15.3253 14.4792 15.3311C14.4908 15.3368 14.5023 15.3426 14.5139 15.3426C14.5255 15.3426 14.5371 15.3484 14.5486 15.3542C14.5602 15.36 14.5718 15.3658 14.5834 15.3658C14.5834 15.3889 14.6065 15.3889 14.6065 15.3889L16.3426 16.4074L19.9537 12.75C19.9537 12.7269 19.9769 12.7269 19.9769 12.7269C19.9884 12.7153 20 12.7095 20.0116 12.7037C20.0232 12.698 20.0347 12.6922 20.0463 12.6806C20.0463 12.6574 20.0695 12.6343 20.0926 12.6343C20.1042 12.6343 20.1158 12.6285 20.1273 12.6227C20.1389 12.6169 20.1505 12.6112 20.1621 12.6112C20.1736 12.6112 20.1852 12.6054 20.1968 12.5996L20.1968 12.5996C20.2084 12.5938 20.2199 12.588 20.2315 12.588C20.2547 12.5649 20.2778 12.5649 20.3009 12.5649C20.3241 12.5417 20.3472 12.5417 20.3704 12.5417H20.4398H20.5093H20.5787H20.6482C20.6597 12.5417 20.6713 12.5475 20.6829 12.5533C20.6945 12.5591 20.706 12.5649 20.7176 12.5649C20.7292 12.5649 20.7408 12.5706 20.7523 12.5764C20.7639 12.5822 20.7755 12.588 20.7871 12.588H20.8102L24.4445 14.3936V7.19449C24.4445 6.4306 23.8195 5.8056 23.0556 5.8056ZM23.0556 23.8612H7.7778C7.01391 23.8612 6.38891 23.2362 6.38891 22.4723V21.4769L14.2593 16.801L19.4676 19.8334C19.5834 19.9028 19.6991 19.926 19.8148 19.926C20.0463 19.926 20.2778 19.8102 20.4167 19.5787C20.6019 19.2547 20.5093 18.8149 20.1621 18.6297L17.5695 17.125L20.625 14.0695L24.4445 15.9676V22.4723C24.4445 23.2362 23.8195 23.8612 23.0556 23.8612ZM13.1019 11.3612C13.1019 12.6343 12.0602 13.676 10.7871 13.676C9.51391 13.676 8.47224 12.6343 8.47224 11.3612C8.47224 10.088 9.51391 9.04634 10.7871 9.04634C12.0602 9.04634 13.1019 10.088 13.1019 11.3612ZM10.7871 10.4352C11.2963 10.4352 11.713 10.8519 11.713 11.3612C11.713 11.8704 11.2963 12.2871 10.7871 12.2871C10.2778 12.2871 9.86113 11.8704 9.86113 11.3612C9.86113 10.8519 10.2778 10.4352 10.7871 10.4352ZM6.25002 29.3334H21.6667C22.0809 29.3334 22.4167 28.9976 22.4167 28.5834C22.4167 28.1692 22.0809 27.8334 21.6667 27.8334H6.25002C5.83581 27.8334 5.50002 28.1692 5.50002 28.5834C5.50002 28.9976 5.83581 29.3334 6.25002 29.3334ZM15 33.5H6.25002C5.83581 33.5 5.50002 33.1643 5.50002 32.75C5.50002 32.3358 5.83581 32 6.25002 32H15C15.4142 32 15.75 32.3358 15.75 32.75C15.75 33.1643 15.4142 33.5 15 33.5Z"></path>
                    </svg>
                    <div className="asideNav__text">Комменты</div>
                </div>
            </div>
            <div className="asideNav__bottomOuter">
                <div className="asideNav__svgBox asideNav__svgBox--5">
                    <svg className="asideNav__svg asideNav__svg--5" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H28C29.1046 1 30 1.89543 30 3V22.3898C30 23.4944 29.1046 24.3898 28 24.3898H21.9844L20.4881 30.0559L15.2344 24.3898H5C3.89543 24.3898 3 23.4944 3 22.3898V3Z" stroke="#939393" strokeWidth="1.5"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.5 15.75L12.6794 17.7586L13.4091 13.5043L10.3181 10.4914L14.5897 9.87069L16.5 6L18.4103 9.87069L22.6819 10.4914L19.5909 13.5043L20.3206 17.7586L16.5 15.75Z" stroke="#939393" strokeWidth="1.5"></path>
                    </svg>
                    <div className="asideNav__text">Избранное</div>
                </div>
                <label htmlFor="switch1" className="asideNav__svgBox asideNav__svgBox--6">
                    <div className="asideNav__switch">
                        <input className="asideNav__input" type="checkbox" id="switch1" />
                        <div className="asideNav__label">Toggle
                    <div className="asideNav__circle"></div>
                        </div>
                    </div>
                    <div className="asideNav__text">Увед-ия</div>
                </label>
                <label htmlFor="switch2" className="asideNav__svgBox asideNav__svgBox--7">
                    <div className="asideNav__switch">
                        <input className="asideNav__input" type="checkbox" id="switch2" />
                        <div className="asideNav__label">Toggle
                    <div className="asideNav__circle"></div>
                        </div>
                    </div>
                    <div className="asideNav__text asideNav__text--center">Все <br /> Опер-ры (2)</div>
                </label>
                <div className="asideNav__svgBox asideNav__svgBox--8">
                    <svg className="asideNav__svg asideNav__svg--8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 11.5547C13.5493 11.5547 11.556 13.5493 11.556 16C11.556 18.4507 13.5493 20.444 16 20.444C18.4507 20.444 20.444 18.4507 20.444 16C20.444 13.5493 18.4507 11.5547 16 11.5547ZM16 21.7773C12.8133 21.7773 10.2227 19.1867 10.2227 16C10.2227 12.8133 12.8133 10.2213 16 10.2213C19.1867 10.2213 21.7773 12.8133 21.7773 16C21.7773 19.1867 19.1867 21.7773 16 21.7773ZM14.4093 30.6667H17.5907C18.096 29.1947 18.4813 27.3987 20.4 26.6C22.3947 25.7773 23.9547 26.8613 25.2467 27.496L27.4947 25.2453C26.8173 23.8493 25.8067 22.3133 26.6027 20.3907C27.3587 18.5653 28.9213 18.1733 30.6667 17.592V14.408C29.02 13.8467 27.372 13.464 26.604 11.6107C25.8413 9.77067 26.68 8.41733 27.496 6.75333L25.2467 4.50533C23.7573 5.23467 22.2853 6.18133 20.3907 5.396C18.5587 4.63467 18.1827 3.084 17.5907 1.33333H14.4093C13.844 2.97467 13.4707 4.624 11.6107 5.39467C11.124 5.59867 10.6533 5.696 10.1747 5.696C9.05067 5.696 8.12267 5.17333 6.75333 4.50533L4.504 6.75333C5.26933 8.32 6.172 9.736 5.396 11.6107C4.63467 13.444 3.084 13.816 1.33333 14.408V17.592C2.968 18.1493 4.624 18.532 5.396 20.3893C6.17067 22.26 5.296 23.632 4.504 25.2467L6.75333 27.496C8.68667 26.5293 9.89333 25.8907 11.6093 26.604C13.4467 27.3667 13.816 28.9213 14.4093 30.6667ZM18.5347 32H13.464C12.556 29.4427 12.4173 28.3827 11.1 27.836C9.76 27.2773 8.792 28.012 6.47867 29.1053L2.89333 25.52C4.05733 23.0707 4.716 22.2333 4.164 20.9C3.61467 19.5787 2.57467 19.4507 0 18.536V13.464C2.54133 12.56 3.616 12.4213 4.164 11.1C4.712 9.77867 4.06933 8.94933 2.89333 6.47867L6.47867 2.89467C8.8 3.99867 9.76667 4.71467 11.0987 4.16533C12.4213 3.616 12.5413 2.58533 13.4653 0H18.5347C19.444 2.55733 19.5853 3.61867 20.9 4.164C22.2347 4.71867 23.1787 4.00533 25.5227 2.89467L29.1053 6.47867C27.9347 8.94133 27.2907 9.78133 27.836 11.0987C28.384 12.4213 29.4253 12.548 32 13.464V18.5373C29.4587 19.44 28.3827 19.58 27.8347 20.9013C27.2973 22.2013 27.8933 22.9827 29.1067 25.52L25.5227 29.1053C23.2187 28.012 22.2333 27.2787 20.9147 27.832C19.5973 28.3787 19.4747 29.36 18.5347 32Z" fill="#939393"></path>
                    </svg>
                    <div className="asideNav__text">Настройки</div>
                </div>
            </div>
        </div>
        <div className="app__asideMessage">
            <div className="asideMessage">
                <div className="asideMessage__topBox asideMessageTopBox">
                    <div className="asideMessageTopBox__outer">
                        <div id="asideMessageTopBox__inputBox" className="asideMessageTopBox__inputBox">
                            <input id="asideMessageTopBox__input" className="asideMessageTopBox__input" type="text" defaultValue="Поиск" />
                            <div className="asideMessageTopBox__inputButtonBox">
                                <div className="asideMessageTopBox__inputButton">
                                    <div className="asideMessageTopBox__inputButtonLine"></div>
                                </div>
                            </div>
                        </div>
                        <div id="asideMessageTopBox__button" className="asideMessageTopBox__button">
                            <div className="globalSettingsSelect">
                                <select>
                                    <option value="0">Выбрать период</option>
                                    <option value="1">Сегодня 4500</option>
                                    <option value="2">Вчера 4328</option>
                                    <option value="3" disabled>По времени</option>
                                    <option value="4" className="checkbx">Сначала новые 3455</option>
                                    <option value="5" className="checkbx">Сначала старые 543</option>
                                    <option value="6" disabled>По длине</option>
                                    <option value="7" className="checkbx">Любая длина</option>
                                    <option value="8" className="checkbx">Сначала длинные</option>
                                    <option value="9" className="checkbx">Сначала короткие</option>
                                    <option value="10">Выбрать период</option>
                                </select>
                            </div>
                        </div>
                        <svg id="asideMessageTopBox__svg" className="asideMessageTopBox__svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.5 5.5C12.5 5.77614 12.2761 6 12 6H4C3.72386 6 3.5 5.77614 3.5 5.5C3.5 5.22386 3.72386 5 4 5H12C12.2761 5 12.5 5.22386 12.5 5.5ZM11 9C11.2761 9 11.5 8.77614 11.5 8.5C11.5 8.22386 11.2761 8 11 8H5C4.72386 8 4.5 8.22386 4.5 8.5C4.5 8.77614 4.72386 9 5 9H11ZM9.5 11.5C9.5 11.7761 9.27614 12 9 12H7C6.72386 12 6.5 11.7761 6.5 11.5C6.5 11.2239 6.72386 11 7 11H9C9.27614 11 9.5 11.2239 9.5 11.5Z"></path>
                        </svg>
                    </div>
                    <div className="asideMessageTopBox__downloadMore">загрузить новые (245)</div>
                </div>
                <div className="asideMessage__messageOuter">
                    <div className="asideMessage__message messageBox unread">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_1} src={icon_1} />
                                <div className="messageBox__name">ksusharekeda</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">12ч <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_2} src={icon_2} />
                                <div className="messageBox__name">Nora Banks</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">Вчера <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_3} src={icon_3} />
                                <div className="messageBox__name">Stella Griffin</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">Сегодня <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_4} src={icon_4} />
                                <div className="messageBox__name">Lena Alexander</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">2 дня <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_5} src={icon_5} />
                                <div className="messageBox__name">Madge Lambert</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">1 месяц <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_1} src={icon_1} />
                                <div className="messageBox__name">Kate Burke</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">1 месяц <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_1} src={icon_1} />
                                <div className="messageBox__name">ksusharekeda</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">12 ч <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                    <div className="asideMessage__message messageBox">
                        <div className="messageBox__topLine">
                            <div className="messageBox__leftInfo"><img className="messageBox__photo" alt={icon_1} src={icon_1} />
                                <div className="messageBox__name">ksusharekeda</div>
                            </div>
                            <div className="messageBox__rightInfo">
                                <div className="messageBox__circleOuter">
                                    <div className="messageBox__circle"></div>
                                </div>
                                <svg className="messageBox__star" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 13.25L4.0916 15.5676L4.93353 10.6588L1.36707 7.18237L6.29579 6.46619L8.49999 2L10.7042 6.46619L15.6329 7.18237L12.0665 10.6588L12.9084 15.5676L8.49999 13.25Z" stroke="#939393"></path>
                                </svg>
                                <div className="messageBox__time">12 ч <div className="messageBox__hint">13.09.19 в 14:45</div></div>
                                <div className="messageBox__onlineIcon active"></div>
                            </div>
                        </div>
                        <div className="messageBox__content">Зравствуйте! Хочу похудеть на 25-30кг. Мой малоподвижный <span>образ жизни</span>, слабая сила воли, лень…</div>
                    </div>
                </div>
            </div>
        </div>
        <Content />
      </div>
      
    )
}

export default Aside;