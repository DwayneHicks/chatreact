import React from 'react';
 
import icon_1 from './../../img/photo/icon_1.png'; // relative path to image 
import icon_2 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_3 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_4 from './../../img/photo/icon_2.png'; // relative path to image 
import icon_5 from './../../img/photo/icon_2.png'; // relative path to image 

function Aside() {
    return (
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
  )
}

export default Aside;