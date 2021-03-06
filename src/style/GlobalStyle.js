import { createGlobalStyle } from 'styled-components'
import { SystemFont, fontNotoBk } from './_fonts'

const GlobalStyle = createGlobalStyle`
  /* reset */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0}
  fieldset,img{border:0 none}
  dl,ul,ol,menu,li{list-style:none}
  blockquote, q{quotes: none}
  blockquote:before, blockquote:after,q:before, q:after{content:'';content:none}
  input,select,textarea,button{vertical-align:middle}
  input::-ms-clear{display:none}
  button{border:0 none;background-color:transparent;cursor:pointer}
  body{background:#fff}
  body,th,td,input,select,textarea,button{font-size:16px;line-height:1.5;${SystemFont}color:#333} /* color값은 디자인가이드에 맞게사용 */
  a{color:#333;text-decoration:none}
  a:active, a:hover{text-decoration:underline}
  a:active{background-color:transparent}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
  textarea{-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none}

  /* global */
  .direct-link{position:absolute;top:-1px;left:0;z-index:1000;height:1px}
  .direct-link .link_g{position:absolute;top:-999px;padding:5px 10px;font-weight:bold;color:#fff;background:#333;text-decoration:none;white-space:nowrap}
  .direct-link .link_g:focus{top:0}
  .ir_pm{display:block;overflow:hidden;font-size:0;line-height:0;text-indent:-9999px}
  .ir_wa{display:block;overflow:hidden;position:relative;z-index:-1;width:100%;height:100%}
  .ir_caption{overflow:hidden;width:1px;font-size:1px;line-height:0;text-indent:-9999px} 
  .screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
  .show{display:block}
  .hide{display:none}
  
  /* common */
  html,body{height:100%}
  #App{height:100%}
`;

export default GlobalStyle