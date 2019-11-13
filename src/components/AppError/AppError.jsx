import React from 'react';

function AppError() {
  return (
    <div class="appError">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" class="appError__svg"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M23.6514 17.9423L13.7527 1.00144C13.3905 0.38169 12.7213 0 11.997 0C11.2728 0 10.6036 0.38169 10.2413 1.00144L0.271478 18.0642C-0.0904928 18.6839 -0.0904928 19.4473 0.271478 20.0671C0.633739 20.6868 1.30295 21.0685 2.02718 21.0685H21.9672H21.973C23.0925 21.0685 24 20.1718 24 19.0656C23.9997 18.6493 23.8714 18.2625 23.6514 17.9423ZM11.9999 5.89245C12.6254 5.89245 13.1328 6.39346 13.1328 7.01177L12.8432 13.6873C12.8142 14.2911 12.3393 14.5205 11.9999 14.5205C11.6197 14.5205 11.19 14.3225 11.1567 13.6873L10.8671 7.01177C10.8671 6.39346 11.3744 5.89245 11.9999 5.89245ZM11.9999 18.3226C12.3819 18.3226 12.7554 18.1709 13.0221 17.9048C13.2943 17.6387 13.4478 17.2696 13.4478 16.8919C13.4478 16.5171 13.2943 16.148 13.0221 15.8819C12.7554 15.6158 12.3819 15.4613 11.9999 15.4613C11.6177 15.4613 11.2441 15.6158 10.9748 15.8819C10.7055 16.148 10.552 16.5143 10.552 16.8919C10.552 17.2696 10.7055 17.6387 10.9748 17.9048C11.2441 18.1709 11.6177 18.3226 11.9999 18.3226Z"
          fill="#FA0032" />
      </svg>
      <div class="appError__text">Pictures’ already exists.<span> Try another name” rather than “Can’t rename
            ‘Pictures’ because a file or folder with that name already exists. Specify a different name.</span></div>
      <svg width="20" height="20" viewBox="0 0 20 20" class="appError__close" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.51461 1.35789L18.4852 18.3284" stroke="#222222" stroke-width="2" stroke-linecap="round" />
        <path d="M1.51469 17.9853L18.4852 1.0147" stroke="#222222" stroke-width="2" stroke-linecap="round" />
      </svg>
    </div>
  )
}

export default AppError;