(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1521:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s,o,l,b,j,d,u,x,O,h,f=n(1),p=n(44),m=n(78),v=n(39),g=n(2),y=n(191),k=n(14),w=n(8),S=n(6),I=n(246),C=n(792),L=n(89),A=n(28),z=n(73),D=n(395),F=n(37),P=n(76),E=n(848),N=n(877),B=n(9),T=n(94),W=n(32),H=n(158),M=n(907),Q=n(880),Y=n(0),U=S.e.div(c||(c=Object(w.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 1;\n"]))),$=S.e.div(r||(r=Object(w.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    "," {\n      opacity: 1;\n    }\n  }\n"])),U),G=function(e){var t=e.src,n=e.alt,c=Object(g.dd)(Object(Y.jsx)(Q.a,{}),!1),r=Object(B.a)(c,1)[0];return Object(Y.jsxs)($,{onClick:r,children:[Object(Y.jsx)(M.a,{src:t,alt:n}),Object(Y.jsx)(U,{})]})},R=n(999),X=n(908),Z=n(988),q=Object(S.e)(g.gb)(i||(i=Object(w.a)(["\n  width: fit-content;\n"]))),J=function(e){var t,n,c=e.accountPath,r=e.profile,i=e.achievements,a=e.nftCollected,s=e.isAchievementsLoading,o=e.isNftLoading,l=e.isProfileLoading,b=Object(k.b)().t,j=Object(p.c)().account,d=Object(g.dd)(Object(Y.jsx)(Q.a,{}),!1),u=Object(B.a)(d,1)[0],x=(null===j||void 0===j?void 0:j.toLowerCase())===(null===c||void 0===c?void 0:c.toLowerCase()),O=o?null:a?Object(W.e)(a,0,0):"-",h=l?null:(null===r||void 0===r?void 0:r.points)?Object(W.e)(r.points,0,0):"-",f=s?null:(null===i||void 0===i?void 0:i.length)?Object(W.e)(i.length,0,0):"-",m=(null===r||void 0===r||null===(t=r.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail)||"/images/nfts/no-profile-md.png";return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(R.a,{bannerImage:function(){var e="/images/teams";if(r)switch(r.teamId){case 1:return"".concat(e,"/storm-banner.png");case 2:return"".concat(e,"/flippers-banner.png");case 3:return"".concat(e,"/cakers-banner.png")}return"".concat(e,"/no-team-banner.png")}(),bannerAlt:b("User team banner"),avatar:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Y.Fragment,{children:r&&c&&x?Object(Y.jsx)(G,{src:m,alt:b("User profile picture")}):Object(Y.jsx)(M.a,{src:m,alt:b("User profile picture")})}),Object(Y.jsx)(g.bb,{display:"inline-flex",children:c&&Object(Y.jsx)(q,{target:"_blank",as:"a",href:Object(v.e)(c,"address"),alt:b("View BscScan for user address"),children:Object(Y.jsx)(g.q,{width:"20px",color:"primary"})})})]})}),Object(Y.jsx)(Z.a,{pb:"48px",title:(null===r||void 0===r?void 0:r.username)?"@".concat(r.username):c?Object(H.a)(c,5,3):null,description:Object(Y.jsxs)(g.bb,{flexDirection:"column",mb:[16,null,0],mr:[0,null,16],children:[c&&(null===r||void 0===r?void 0:r.username)&&Object(Y.jsx)(g.pb,{href:Object(v.e)(c,"address"),external:!0,bold:!0,color:"primary",children:Object(H.a)(c)}),c&&x&&(!r||!(null===r||void 0===r?void 0:r.nft))&&(r?Object(Y.jsx)(g.t,{width:"fit-content",mt:"16px",onClick:u,children:b("Reactivate Profile")}):Object(Y.jsx)(T.a,{to:"/create-profile",children:Object(Y.jsx)(g.t,{mt:"16px",children:b("Activate Profile")})}))]}),children:Object(Y.jsxs)(X.b,{children:[Object(Y.jsx)(X.a,{title:b("NFT Collected"),stat:O}),Object(Y.jsx)(X.a,{title:b("Points"),stat:h}),Object(Y.jsx)(X.a,{title:b("Achievements"),stat:f})]})})]})},V=S.e.button(a||(a=Object(w.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  color: ",";\n  border-width: ",";\n  border-style: solid solid none solid;\n  border-color: ",";\n  outline: 0;\n  padding: 12px 16px;\n  border-radius: 16px 16px 0 0;\n  font-size: 16px;\n  font-weight: ",";\n  background-color: ",";\n  transition: background-color 0.3s ease-out;\n"])),(function(e){var t=e.theme;return e.$active?t.colors.secondary:t.colors.textSubtle}),(function(e){return e.$active?"1px 1px 0 1px":"0"}),(function(e){var t=e.theme;return"".concat(t.colors.cardBorder," ").concat(t.colors.cardBorder," transparent ").concat(t.colors.cardBorder)}),(function(e){return e.$active?"600":"400"}),(function(e){var t=e.theme;return e.$active?t.colors.background:"transparent"})),_=function(){var e=Object(k.b)().t,t=Object(m.i)().accountAddress,n=Object(m.h)().pathname,c=Object(f.useState)(n.includes("achievements")),r=Object(B.a)(c,2),i=r[0],a=r[1];return Object(f.useEffect)((function(){a(n.includes("achievements"))}),[n]),Object(Y.jsxs)(g.bb,{children:[Object(Y.jsx)(V,{onClick:function(){return a(!1)},$active:!i,as:T.a,to:"".concat(L.a,"/profile/").concat(t),children:"NFTs"}),Object(Y.jsx)(V,{onClick:function(){return a(!0)},$active:i,as:T.a,to:"".concat(L.a,"/profile/").concat(t,"/achievements"),children:e("Achievements")})]})},K=n(915),ee=n(5),te=n(53),ne=["badge"],ce=Object(S.e)(g.s)(s||(s=Object(w.a)(["\n  height: 48px;\n  width: 48px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),re=S.e.img(o||(o=Object(w.a)(["\n  height: 48px;\n  width: 48px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),ie=function(e){var t=e.badge,n=Object(te.a)(e,ne);return t?Object(Y.jsx)(re,Object(ee.a)({src:"/images/achievements/".concat(t),alt:"achievement badge"},n)):Object(Y.jsx)(ce,{})},ae=["title"],se=function(e){var t=e.title,n=Object(te.a)(e,ae),c=Object(k.b)().t;if("string"===typeof t)return Object(Y.jsx)(g.zc,Object(ee.a)(Object(ee.a)({bold:!0},n),{},{children:t}));var r=t.key,i=t.data,a=void 0===i?{}:i;return Object(Y.jsx)(g.zc,Object(ee.a)(Object(ee.a)({bold:!0},n),{},{children:c(r,a)}))},oe=["description"],le=Object(S.e)(g.zc).attrs({as:"p",fontSize:"14px"})(l||(l=Object(w.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),be=function(e){var t=e.description,n=Object(te.a)(e,oe),c=Object(k.b)().t;if(!t)return null;if("string"===typeof t)return Object(Y.jsx)(g.zc,Object(ee.a)(Object(ee.a)({as:"p",color:"textSubtle",fontSize:"14px"},n),{},{children:t}));var r=t.key,i=t.data,a=void 0===i?{}:i;return Object(Y.jsx)(le,Object(ee.a)(Object(ee.a)({color:"textSubtle"},n),{},{children:c(r,a)}))},je=Object(S.e)(g.bb)(b||(b=Object(w.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),de=function(e){var t=e.achievement;return Object(Y.jsxs)(g.bb,{children:[Object(Y.jsx)(ie,{badge:t.badge}),Object(Y.jsxs)(je,{children:[Object(Y.jsx)(se,{title:t.title}),Object(Y.jsx)(be,{description:t.description})]}),Object(Y.jsxs)(g.bb,{alignItems:"center",children:[Object(Y.jsx)(g.Wb,{width:"18px",color:"textSubtle",mr:"4px"}),Object(Y.jsx)(g.zc,{color:"textSubtle",children:t.points.toLocaleString()})]})]})},ue=S.e.div(j||(j=Object(w.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),xe=function(e){var t=e.achievements,n=Object(k.b)().t;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ue,{children:t.map((function(e){return Object(Y.jsx)(de,{achievement:e},e.id)}))}),0===t.length&&Object(Y.jsx)(g.bb,{alignItems:"center",justifyContent:"center",style:{height:"64px"},children:Object(Y.jsx)(g.db,{as:"h5",scale:"md",color:"textDisabled",children:n("No achievements yet!")})})]})},Oe=n(3),he=n.n(Oe),fe=n(11),pe=n(98),me=n(161),ve=n(349),ge=n(100),ye=n(45),ke=n(131),we=n(105),Se=["points"],Ie=function(e){var t=e.points,n=Object(te.a)(e,Se),c=Object(k.b)().t,r=t.toLocaleString();return Object(Y.jsxs)(g.bb,Object(ee.a)(Object(ee.a)({alignItems:"center"},n),{},{children:[Object(Y.jsx)(g.Wb,{mr:"4px",color:"textSubtle"}),Object(Y.jsx)(g.zc,{color:"textSubtle",children:c("%num% points",{num:r})})]}))},Ce=S.e.div(d||(d=Object(w.a)(["\n  flex: none;\n  width: 100%;\n\n  "," {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Le=Object(S.e)(g.bb)(u||(u=Object(w.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),Ae=S.e.div(x||(x=Object(w.a)(["\n  flex: 1;\n"]))),ze=Object(S.e)(g.bb)(O||(O=Object(w.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),De=function(e){var t=e.achievement,n=e.onCollectSuccess,c=Object(f.useState)(!1),r=Object(B.a)(c,2),i=r[0],a=r[1],s=Object(k.b)().t,o=Object(ye.s)(),l=Object(ge.a)(),b=l.toastError,j=l.toastSuccess,d=Object(ke.a)().callWithGasPrice,u=function(){var e=Object(fe.a)(he.a.mark((function e(){var c,r;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(o,"getPoints",[t.address]);case 3:return c=e.sent,a(!0),e.next=7,c.wait();case 7:(r=e.sent).status?(n(t),j(s("Points Collected!"),Object(Y.jsx)(we.b,{txHash:r.transactionHash}))):b(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 14:return e.prev=14,a(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(Y.jsxs)(Le,{children:[Object(Y.jsx)(ie,{badge:t.badge}),Object(Y.jsxs)(ze,{children:[Object(Y.jsxs)(Ae,{children:[Object(Y.jsx)(se,{title:t.title}),Object(Y.jsx)(be,{description:t.description})]}),Object(Y.jsx)(Ie,{points:t.points,px:[0,null,null,"32px"],mb:["16px",null,null,0]}),Object(Y.jsx)(Ce,{children:Object(Y.jsx)(g.t,{onClick:u,isLoading:i,endIcon:i?Object(Y.jsx)(g.i,{spin:!0,color:"currentColor"}):null,disabled:i,variant:"secondary",children:s("Collect")})})]})]})},Fe=function(){var e=Object(f.useState)([]),t=Object(B.a)(e,2),n=t[0],c=t[1],r=Object(k.b)().t,i=Object(z.b)(),a=Object(I.d)().profile,s=Object(p.c)().account;Object(f.useEffect)((function(){s&&function(){var e=Object(fe.a)(he.a.mark((function e(){var t;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ve.c)(s);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,i,c]);var o=function(e){i(Object(D.a)(e)),i(Object(me.a)(e.points)),c((function(t){return t.filter((function(t){return t.id!==e.id}))}))};if(!(null===a||void 0===a?void 0:a.isActive))return null;if(0===n.length)return null;var l=Object(pe.sumBy)(n,"points");return Object(Y.jsxs)(g.y,{isActive:!0,mb:"32px",children:[Object(Y.jsx)(g.B,{children:Object(Y.jsx)(g.bb,{flexDirection:["column",null,"row"],justifyContent:["start",null,"space-between"],children:Object(Y.jsxs)(g.bb,{alignItems:"center",mb:["16px",null,0],children:[Object(Y.jsx)(g.Wb,{width:"32px",mr:"8px"}),Object(Y.jsx)(g.db,{scale:"lg",children:r("%num% Points to Collect",{num:l})})]})})}),Object(Y.jsx)(g.z,{children:n.map((function(e){return Object(Y.jsx)(De,{achievement:e,onCollectSuccess:o},e.address)}))})]})},Pe=function(e){var t=e.achievements,n=e.points,c=void 0===n?0:n,r=Object(k.b)().t;return Object(Y.jsx)(g.y,{children:Object(Y.jsxs)(g.z,{children:[Object(Y.jsx)(K.a,{icon:g.Wb,title:c,subtitle:r("Points"),mb:"24px"}),Object(Y.jsx)(g.db,{as:"h4",scale:"md",mb:"16px",children:r("Achievements")}),Object(Y.jsx)(Fe,{}),Object(Y.jsx)(xe,{achievements:t})]})})},Ee=n(249),Ne=n(71),Be=n(371),Te=n(97),We=n(31),He=n(55);!function(e){e.NEW="NEW",e.CANCEL="CANCEL",e.MODIFY="MODIFY",e.BUY="BUY",e.SELL="SELL"}(h||(h={}));var Me,Qe,Ye,Ue,$e,Ge,Re=function(e,t){var n=t.askOrderHistory,c=t.buyTradeHistory,r=t.sellTradeHistory,i=function(t){return t.map((function(t){var n=t.seller.id===e.toLowerCase(),c=n?h.SELL:h.BUY,r=t.timestamp,i=t.nft;return{marketEvent:c,price:t.askPrice,otherParty:n?t.buyer.id:t.seller.id,timestamp:r,nft:i,tx:t.id}}))},a=[].concat(Object(We.a)(n.map((function(e){var t=function(e){switch(e){case P.a.CANCEL:return h.CANCEL;case P.a.MODIFY:return h.MODIFY;case P.a.NEW:return h.NEW;default:return h.MODIFY}}(e.orderType),n=e.timestamp,c=e.nft;return{marketEvent:t,price:e.askPrice,timestamp:n,nft:c,tx:e.id}}))),Object(We.a)(i(c)),Object(We.a)(i(r)));return a.length>0?a.sort((function(e,t){var n=He.a.BigNumber.from(e.timestamp);return He.a.BigNumber.from(t.timestamp).sub(n).toNumber()})):[]},Xe=n(22),Ze=n(989),qe=n(18),Je=["marketEvent"],Ve=function(e){var t,n=e.marketEvent,c=Object(te.a)(e,Je),r=Object(k.b)().t,i=(t={},Object(qe.a)(t,h.NEW,{text:r("Listed"),color:"textSubtle"}),Object(qe.a)(t,h.CANCEL,{text:r("Delisted"),color:"textSubtle"}),Object(qe.a)(t,h.MODIFY,{text:r("Modified"),color:"textSubtle"}),Object(qe.a)(t,h.BUY,{text:r("Bought"),color:"success"}),Object(qe.a)(t,h.SELL,{text:r("Sold"),color:"failure"}),t);return Object(Y.jsx)(g.zc,Object(ee.a)(Object(ee.a)({},c),{},{color:i[n].color,children:i[n].text}))},_e=n(90),Ke=function(e){var t=e.bnbBusdPrice,n=e.price,c=Object(_e.d)(t,n);return Object(Y.jsx)(g.bb,{flexDirection:"column",alignItems:"flex-end",children:n?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(g.bb,{justifySelf:"flex-start",alignItems:"center",children:[Object(Y.jsx)(g.l,{width:"12px",height:"12px",mr:"4px"}),Object(Y.jsx)(g.zc,{maxWidth:"80px",bold:!0,children:n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:5})})]}),Object(Y.jsx)(g.zc,{fontSize:"12px",color:"textSubtle",children:"(~$".concat(c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")})]}):"-"})},et=n(120),tt=Object(S.e)(g.hb)(Me||(Me=Object(w.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),nt=function(e){var t=e.nft,n=e.activity,c=e.bnbBusdPrice,r=e.localeTimestamp,i=e.onDismiss,a=Object(Xe.a)().chainId,s=Object(k.b)().t,o=Object(Te.a)().theme,l=parseFloat(n.price),b=Object(_e.d)(c,l);return Object(Y.jsx)(g.Db,{title:s("Transaction Details"),onDismiss:i,headerBackground:o.colors.gradients.cardHeader,children:Object(Y.jsxs)(g.bb,{flexDirection:"column",maxWidth:"350px",children:[Object(Y.jsxs)(g.bb,{alignItems:"center",mb:"16px",children:[Object(Y.jsx)(tt,{src:t.image.thumbnail,height:68,width:68,mr:"16px"}),Object(Y.jsxs)(g.bb,{flexDirection:"column",children:[Object(Y.jsx)(g.zc,{fontSize:"12px",color:"textSubtle",textAlign:"right",children:t.collectionName}),Object(Y.jsx)(g.zc,{bold:!0,children:t.name})]})]}),Object(Y.jsxs)(et.c,{p:"16px",children:[Object(Y.jsxs)(g.bb,{mb:"24px",justifyContent:"space-between",children:[Object(Y.jsx)(Ve,{fontSize:"14px",marketEvent:n.marketEvent}),l?Object(Y.jsxs)(g.bb,{justifyContent:"flex-end",alignItems:"center",children:[Object(Y.jsx)(g.l,{width:"12px",height:"12px",mr:"4px"}),Object(Y.jsx)(g.zc,{mr:"4px",bold:!0,children:l}),Object(Y.jsx)(g.zc,{color:"textSubtle",children:"(~$".concat(b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]}):"-"]}),Object(Y.jsxs)(g.bb,{mb:"24px",justifyContent:"space-between",children:[Object(Y.jsx)(g.zc,{fontSize:"14px",color:"textSubtle",children:s("From/To")}),Object(Y.jsx)(g.zc,{children:n.otherParty?Object(H.a)(n.otherParty):"-"})]}),Object(Y.jsxs)(g.bb,{justifyContent:"space-between",children:[Object(Y.jsx)(g.zc,{fontSize:"14px",color:"textSubtle",children:s("Date")}),Object(Y.jsx)(g.zc,{children:r})]})]}),Object(Y.jsx)(g.bb,{flexDirection:"column",pt:"16px",alignItems:"center",children:Object(Y.jsx)(g.t,{as:g.pb,external:!0,href:Object(v.e)(n.tx,"transaction",a),children:s("View on BscScan")})})]})})},ct=Object(S.e)(g.hb)(Qe||(Qe=Object(w.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),rt=function(e){var t=e.activity,n=e.bnbBusdPrice,c=e.nft,r=Object(Xe.a)().chainId,i=Object(g.cd)(),a=i.isXs,s=i.isSm,o=parseFloat(t.price),l=1e3*parseFloat(t.timestamp),b=new Date(l).toLocaleString(void 0,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),j=Object(g.dd)(Object(Y.jsx)(nt,{nft:c,activity:t,localeTimestamp:b,bnbBusdPrice:n})),d=Object(B.a)(j,1)[0];return Object(Y.jsxs)("tr",Object(ee.a)(Object(ee.a)({},(a||s)&&{onClick:d}),{},{children:[Object(Y.jsx)(g.xc,{children:Object(Y.jsxs)(g.bb,{justifyContent:"flex-start",alignItems:"center",flexDirection:["column",null,"row"],children:[Object(Y.jsx)(ct,{src:null===c||void 0===c?void 0:c.image.thumbnail,alt:null===c||void 0===c?void 0:c.name,width:64,height:64,mr:[0,null,"16px"],mb:["8px",null,0]}),Object(Y.jsxs)(g.bb,{flexDirection:"column",children:[Object(Y.jsx)(g.zc,{textAlign:["center",null,"left"],color:"textSubtle",fontSize:"14px",children:null===c||void 0===c?void 0:c.collectionName}),Object(Y.jsx)(g.zc,{textAlign:["center",null,"left"],bold:!0,children:null===c||void 0===c?void 0:c.name})]})]})}),Object(Y.jsxs)(g.xc,{children:[Object(Y.jsx)(g.bb,{alignItems:"center",justifyContent:"flex-end",children:Object(Y.jsx)(Ve,{marketEvent:t.marketEvent})}),a||s?Object(Y.jsx)(Ke,{price:o,bnbBusdPrice:n}):null]}),a||s?null:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(Ke,{price:o,bnbBusdPrice:n})}),Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(g.bb,{justifyContent:"flex-end",alignItems:"center",children:t.otherParty?Object(Y.jsx)(Ze.a,{accountAddress:t.otherParty}):"-"})})]}),Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(g.bb,{justifyContent:"center",children:Object(Y.jsx)(g.zc,{textAlign:"center",fontSize:a||s?"12px":"16px",children:b})})}),a||s?null:Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(g.gb,{as:g.pb,external:!0,href:Object(v.e)(t.tx,"transaction",r),children:Object(Y.jsx)(g.Ob,{color:"textSubtle",width:"18px"})})})]}))},it=Object(S.e)(g.bb)(Ye||(Ye=Object(w.a)(["\n  align-items: center;\n"]))),at=function(){var e=Object(g.cd)(),t=e.isXs,n=e.isSm;return Object(Y.jsxs)("tr",{children:[Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(it,{children:Object(Y.jsx)(g.fc,{height:[162,null,64],width:[80,null,200]})})}),Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(it,{justifyContent:"flex-end",children:Object(Y.jsx)(g.fc,{height:[66,null,24],width:64})})}),t||n?null:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(it,{justifyContent:"flex-end",children:Object(Y.jsx)(g.fc,{height:42,width:64})})}),Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(it,{justifyContent:"flex-end",children:Object(Y.jsx)(g.fc,{height:48,width:124})})})]}),Object(Y.jsx)(g.xc,{children:Object(Y.jsx)(it,{justifyContent:"center",children:Object(Y.jsx)(g.fc,{height:[36,null,24],width:[80,null,120]})})})]})},st=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{}),Object(Y.jsx)(at,{})]})},ot=S.e.div(Ue||(Ue=Object(w.a)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]))),lt=n(1130),bt=function(){var e=Object(p.c)().account,t=Object(z.b)(),n=Object(m.i)().accountAddress,c=Object(Te.a)().theme,r=Object(k.b)().t,i=Object(f.useState)(1),a=Object(B.a)(i,2),s=a[0],o=a[1],l=Object(f.useState)(1),b=Object(B.a)(l,2),j=b[0],d=b[1],u=Object(f.useState)([]),x=Object(B.a)(u,2),O=x[0],h=x[1],y=Object(f.useState)([]),w=Object(B.a)(y,2),S=w[0],I=w[1],L=Object(f.useState)([]),A=Object(B.a)(L,2),D=A[0],F=A[1],E=Object(f.useState)(!0),N=Object(B.a)(E,2),T=N[0],W=N[1],H=Object(C.n)(),M=H.activity,Q=H.userNftsInitializationState,U=Object(Be.a)(),$=Object(g.cd)(),G=$.isXs,R=$.isSm;return Object(f.useEffect)((function(){e&&Q===P.e.INITIALIZED&&(!(!n||!Object(v.i)(n))&&e.toLowerCase()!==n.toLocaleLowerCase()||(F(Re(e,M)),W(!1)))}),[e,Q,M,n]),Object(f.useEffect)((function(){var c=function(){var e=Object(fe.a)(he.a.mark((function e(){var t;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Ne.v)(n.toLocaleLowerCase());case 3:t=e.sent,F(Re(n,t)),W(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Failed to fetch address activity",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e?!(!n||!Object(v.i)(n))&&e.toLowerCase()!==n.toLocaleLowerCase()?c():t(Object(Ee.g)(e)):n&&Object(v.i)(n)&&c()}),[e,n,t]),Object(f.useEffect)((function(){var e=function(){var e=Object(fe.a)(he.a.mark((function e(){var t,n;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(pe.uniqBy)(D.map((function(e){return{tokenId:e.nft.tokenId,collectionAddress:e.nft.collection.id}})),"tokenId"),e.next=3,Object(Ne.s)(t);case 3:n=e.sent,I(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return D.length>0&&(!function(){var e=Math.ceil(D.length/8);d(e)}(),e()),function(){h([]),I([]),d(1),o(1)}}),[D]),Object(f.useEffect)((function(){D.length>0&&function(){var e=D.slice(8*(s-1),8*s);h(e)}()}),[D,s]),Object(Y.jsx)(g.y,{children:0!==D.length||0!==S.length||0!==O.length||T?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(g.vc,{children:[Object(Y.jsx)("thead",{children:Object(Y.jsxs)("tr",{children:[Object(Y.jsxs)(g.Bc,{textAlign:["center",null,"left"],children:[" ",r("Item")]}),Object(Y.jsxs)(g.Bc,{textAlign:"right",children:[" ",r("Event")]}),G||R?null:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(g.Bc,{textAlign:"right",children:[" ",r("Price")]}),Object(Y.jsxs)(g.Bc,{textAlign:"right",children:[" ",r("From/To")]})]}),Object(Y.jsxs)(g.Bc,{textAlign:"center",children:[" ",r("Date")]}),G||R?null:Object(Y.jsx)(g.Bc,{})]})}),Object(Y.jsx)("tbody",{children:T?Object(Y.jsx)(st,{}):O.map((function(e){var t=S.find((function(t){return t.tokenId===e.nft.tokenId}));return Object(Y.jsx)(rt,{activity:e,nft:t,bnbBusdPrice:U},"".concat(e.nft.tokenId).concat(e.timestamp))}))})]}),Object(Y.jsx)(g.bb,{borderTop:"1px ".concat(c.colors.cardBorder," solid"),pt:"24px",flexDirection:"column",justifyContent:"space-between",height:"100%",children:Object(Y.jsxs)(lt.b,{children:[Object(Y.jsx)(lt.a,{onClick:function(){o(1===s?s:s-1)},children:Object(Y.jsx)(g.c,{color:1===s?"textDisabled":"primary"})}),Object(Y.jsx)(g.zc,{children:r("Page %page% of %maxPage%",{page:s,maxPage:j})}),Object(Y.jsx)(lt.a,{onClick:function(){o(s===j?s:s+1)},children:Object(Y.jsx)(g.f,{color:s===j?"textDisabled":"primary"})})]})})]}):Object(Y.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(Y.jsx)(ot,{}),Object(Y.jsx)(g.zc,{pt:"8px",bold:!0,children:r("No NFT market history found")})]})})},jt=n(990),dt=function(){var e=Object(k.b)().t,t=Object(m.i)().accountAddress,n=Object(m.h)().pathname,c=[{label:e("Items"),href:"".concat(L.a,"/profile/").concat(t)},{label:e("Activity"),href:"".concat(L.a,"/profile/").concat(t,"/activity")}];return Object(Y.jsx)(jt.a,{items:c,activeItem:n,justifyContent:"flex-start",mb:"60px"})},ut=n(832),xt=n(831),Ot=n(991),ht=n(842),ft=function(){var e=Object(C.n)(),t=e.nfts,n=e.userNftsInitializationState,c=Object(f.useState)({nft:null,location:null}),r=Object(B.a)(c,2),i=r[0],a=r[1],s=Object(f.useState)({nft:null,location:null,variant:null}),o=Object(B.a)(s,2),l=o[0],b=o[1],j=Object(g.dd)(Object(Y.jsx)(Ot.a,{nft:i.nft})),d=Object(B.a)(j,1)[0],u=Object(g.dd)(Object(Y.jsx)(ht.a,{variant:l.variant,nftToSell:l.nft})),x=Object(B.a)(u,1)[0],O=Object(k.b)().t;return Object(f.useEffect)((function(){i.nft&&d()}),[i]),Object(f.useEffect)((function(){l.nft&&x()}),[l]),Object(Y.jsx)(Y.Fragment,{children:0===t.length&&n===P.e.INITIALIZED?Object(Y.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(Y.jsx)(ot,{}),Object(Y.jsx)(g.zc,{pt:"8px",bold:!0,children:O("No NFTs found")})]}):t.length>0?Object(Y.jsx)(g.cb,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:t.map((function(e){var t=e.marketData,n=e.location;return Object(Y.jsx)(ut.a,{isUserNft:!0,onClick:function(){return function(e,t){switch(t){case P.d.PROFILE:a({nft:e,location:t});break;case P.d.WALLET:b({nft:e,location:t,variant:"sell"});break;case P.d.FORSALE:b({nft:e,location:t,variant:"edit"})}}(e,n)},nft:e,currentAskPrice:(null===t||void 0===t?void 0:t.currentAskPrice)&&(null===t||void 0===t?void 0:t.isTradable)&&parseFloat(t.currentAskPrice),nftLocation:n},"".concat(e.tokenId,"-").concat(e.collectionName))}))}):Object(Y.jsx)(xt.a,{})})},pt=Object(S.e)(g.o)($e||($e=Object(w.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0%);\n\n  "," {\n    left: auto;\n    transform: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),mt=function(){var e=Object(I.d)(),t=e.profile,n=e.isLoading,c=Object(A.c)((function(e){return e.achievements})),r=c.achievements,i=c.achievementFetchStatus,a=Object(p.c)().account,s=Object(C.n)(),o=s.userNftsInitializationState,l=s.nfts;return function(){var e=Object(p.c)().account,t=Object(z.b)();Object(f.useEffect)((function(){e&&t(Object(D.c)(e))}),[e,t])}(),Object(E.a)(),Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(N.a,{position:"relative",children:[Object(Y.jsx)(J,{accountPath:a,profile:t,achievements:r,nftCollected:l.length,isProfileLoading:n,isNftLoading:o!==P.e.INITIALIZED,isAchievementsLoading:i!==F.a.FETCHED}),Object(Y.jsx)(pt,{children:Object(Y.jsx)(_,{})})]}),Object(Y.jsxs)(y.b,{style:{minHeight:"auto"},children:[Object(Y.jsx)(m.b,{path:"".concat(L.a,"/profile/:accountAddress/achievements"),children:Object(Y.jsx)(Pe,{achievements:r,points:null===t||void 0===t?void 0:t.points})}),Object(Y.jsxs)(m.b,{path:"".concat(L.a,"/profile/:accountAddress/activity"),children:[Object(Y.jsx)(dt,{}),Object(Y.jsx)(bt,{})]}),Object(Y.jsxs)(m.b,{exact:!0,path:"".concat(L.a,"/profile/:accountAddress"),children:[Object(Y.jsx)(dt,{}),Object(Y.jsx)(ft,{})]})]})]})},vt=n(377),gt=n.n(vt),yt=function(e,t,n){var c,r=Object(f.useState)([]),i=Object(B.a)(r,2),a=i[0],s=i[1],o=Object(f.useState)(!0),l=Object(B.a)(o,2),b=l[0],j=l[1],d=Object(C.f)(),u=null===t||void 0===t?void 0:t.tokenId,x=null===t||void 0===t||null===(c=t.tokenId)||void 0===c?void 0:c.toString(),O=null===t||void 0===t?void 0:t.collectionAddress,h=Object(f.useMemo)((function(){return u?{tokenId:x,collectionAddress:O,nftLocation:P.d.PROFILE}:null}),[x,O,u]);return Object(f.useEffect)((function(){var t=function(){var t=Object(fe.a)(he.a.mark((function t(){var n;return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ne.k)(e,d,h);case 2:n=t.sent,s(n),j(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n||gt()(d)||(j(!0),t())}),[e,d,n,h]),{nfts:a,isLoading:b}},kt=function(e){var t=e.nfts,n=e.isLoading,c=Object(k.b)().t;return Object(Y.jsx)(Y.Fragment,{children:0!==t.length||n?t.length>0?Object(Y.jsx)(g.cb,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:t.map((function(e){var t=e.marketData;return Object(Y.jsx)(ut.b,{nft:e,currentAskPrice:(null===t||void 0===t?void 0:t.currentAskPrice)&&(null===t||void 0===t?void 0:t.isTradable)&&parseFloat(t.currentAskPrice)},"".concat(e.tokenId,"-").concat(e.collectionName))}))}):Object(Y.jsx)(xt.a,{}):Object(Y.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(Y.jsx)(ot,{}),Object(Y.jsx)(g.zc,{pt:"8px",bold:!0,children:c("No NFTs found")})]})})},wt=Object(S.e)(g.o)(Ge||(Ge=Object(w.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0%);\n\n  "," {\n    left: auto;\n    transform: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),St=function(){var e=Object(m.i)().accountAddress,t=Object(I.e)(e),n=t.profile,c=t.isFetching,r=(n||{}).profile,i=Object(I.a)(e),a=i.achievements,s=i.isFetching,o=yt(e,r,c),l=o.nfts,b=o.isLoading;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(N.a,{position:"relative",children:[Object(Y.jsx)(J,{accountPath:e,profile:r,achievements:a,nftCollected:l.length,isProfileLoading:c,isNftLoading:b,isAchievementsLoading:s}),Object(Y.jsx)(wt,{children:Object(Y.jsx)(_,{})})]}),Object(Y.jsxs)(y.b,{style:{minHeight:"auto"},children:[Object(Y.jsx)(m.b,{path:"".concat(L.a,"/profile/:accountAddress/achievements"),children:Object(Y.jsx)(Pe,{achievements:a,points:null===r||void 0===r?void 0:r.points})}),Object(Y.jsxs)(m.b,{path:"".concat(L.a,"/profile/:accountAddress/activity"),children:[Object(Y.jsx)(dt,{}),Object(Y.jsx)(bt,{})]}),Object(Y.jsxs)(m.b,{exact:!0,path:"".concat(L.a,"/profile/:accountAddress"),children:[Object(Y.jsx)(dt,{}),Object(Y.jsx)(kt,{nfts:l,isLoading:b})]})]})]})};t.default=function(){var e=Object(p.c)().account,t=Object(m.i)().accountAddress,n=Object(k.b)().t,c=(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase());return!t||!1===Object(v.i)(t)?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(N.a,{position:"relative",children:Object(Y.jsx)(J,{accountPath:t,profile:null,achievements:null,nftCollected:null,isAchievementsLoading:!1,isNftLoading:!1,isProfileLoading:!1})}),Object(Y.jsx)(y.b,{style:{minHeight:"auto"},children:Object(Y.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(Y.jsx)(ot,{}),Object(Y.jsx)(g.zc,{textAlign:"center",maxWidth:"420px",pt:"8px",bold:!0,children:n("Please enter a valid address, or connect your wallet to view your profile")})]})})]}):Object(Y.jsx)(Y.Fragment,{children:c?Object(Y.jsx)(mt,{}):Object(Y.jsx)(St,{})})}},804:function(e,t,n){var c=n(502),r=n(815),i=n(808),a=4294967295,s=Math.min;e.exports=function(e,t){if((e=i(e))<1||e>9007199254740991)return[];var n=a,o=s(e,a);t=r(t),e-=a;for(var l=c(o,t);++n<e;)t(n);return l}},808:function(e,t,n){var c=n(501);e.exports=function(e){var t=c(e),n=t%1;return t===t?n?t-n:t:0}},815:function(e,t,n){var c=n(251);e.exports=function(e){return"function"==typeof e?e:c}},831:function(e,t,n){"use strict";var c=n(53),r=n(5),i=(n(1),n(2)),a=n(804),s=n.n(a),o=n(0),l=["numItems"],b=function(e){return Object(o.jsxs)(i.o,Object(r.a)(Object(r.a)({},e),{},{children:[Object(o.jsx)(i.fc,{height:"258px",mb:"8px"}),Object(o.jsx)(i.fc,{width:"30%",mb:"4px"}),Object(o.jsx)(i.fc,{width:"45%",mb:"16px"}),Object(o.jsx)(i.fc,{})]}))};t.a=function(e){var t=e.numItems,n=void 0===t?12:t,a=Object(c.a)(e,l);return Object(o.jsx)(i.cb,Object(r.a)(Object(r.a)({gridGap:"16px",gridTemplateColumns:["1fr",null,null,"repeat(4, 1fr)"]},a),{},{children:s()(n).map((function(e){return Object(o.jsx)(b,{},e)}))}))}},877:function(e,t,n){"use strict";var c=n(5),r=(n(1),n(376)),i=n(97),a=n(0);t.a=function(e){var t=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(r.a,Object(c.a)({background:t},e))}},907:function(e,t,n){"use strict";var c,r=n(8),i=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.src}),(function(e){return e.borderColor||"#f2ecf2"}));t.a=i},908:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c,r=n(8),i=n(5),a=n(53),s=(n(1),n(6)),o=n(2),l=n(0),b=["title","stat"],j=function(e){var t=e.title,n=e.stat,c=Object(a.a)(e,b);return Object(l.jsxs)(o.o,Object(i.a)(Object(i.a)({},c),{},{children:[Object(l.jsx)(o.zc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:t}),null===n?Object(l.jsx)(o.fc,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(o.zc,{fontWeight:"600",textAlign:"center",children:n})]}))},d=Object(s.e)(o.bb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.invertedContrast}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.radii.card}));t.b=d},915:function(e,t,n){"use strict";var c,r=n(5),i=n(53),a=n(8),s=(n(1),n(2)),o=n(6),l=n(0),b=["icon","title","subtitle","isDisabled"],j=Object(o.e)(s.zc)(c||(c=Object(a.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));j.defaultProps={p:"24px"};t.a=function(e){var t=e.icon,n=e.title,c=e.subtitle,a=e.isDisabled,o=void 0!==a&&a,d=Object(i.a)(e,b);return Object(l.jsx)(j,Object(r.a)(Object(r.a)({},d),{},{children:Object(l.jsxs)(s.bb,{alignItems:"start",children:[Object(l.jsx)(t,{width:"44px",mr:"24px",color:o?"textDisabled":"currentColor"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(s.db,{as:"h3",scale:"xl",color:o?"textDisabled":"text",children:n}),Object(l.jsx)(s.zc,{textTransform:"uppercase",color:o?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:c})]})]})}))}},988:function(e,t,n){"use strict";var c=n(5),r=n(53),i=(n(1),n(2)),a=n(0),s=["title","description","children"];t.a=function(e){var t=e.title,n=e.description,o=e.children,l=Object(r.a)(e,s);return Object(a.jsxs)(i.cb,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(a.jsxs)(i.o,{children:[Object(a.jsx)(i.db,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:t}),n]}),Object(a.jsx)(i.o,{children:o})]}))}},990:function(e,t,n){"use strict";var c,r=n(8),i=n(2),a=n(6),s=Object(a.e)(i.pc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(e){return e.theme.colors.cardBorder}));t.a=s},999:function(e,t,n){"use strict";var c,r=n(5),i=n(53),a=(n(1),n(2)),s=n(8),o=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(s.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(e){var t=e.src,n=e.theme;return t?"background-image: url('".concat(t,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(e){return e.src}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),l=n(0),b=["bannerImage","bannerAlt","avatar","children"];t.a=function(e){var t=e.bannerImage,n=e.bannerAlt,c=e.avatar,s=e.children,j=Object(i.a)(e,b);return Object(l.jsx)(a.bb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},j),{},{children:Object(l.jsxs)(a.o,{position:"relative",pb:"56px",children:[Object(l.jsx)(o,{src:t,alt:n}),Object(l.jsx)(a.o,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(a.bb,{alignItems:"flex-end",children:[c,s]})})]})}))}}}]);
//# sourceMappingURL=13.b23443c1.chunk.js.map