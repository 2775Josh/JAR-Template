"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[37],{5680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>g});var r=o(6540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(g,i(i({ref:t},c),{},{components:o})):r.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5818:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(8168),n=(o(6540),o(5680));const a={sidebar_position:2,sidebar_label:"Setting Up JAR Template"},i="Setting Up JAR Template",l={unversionedId:"basic-tutorials/setting-up-jar-template",id:"basic-tutorials/setting-up-jar-template",title:"Setting Up JAR Template",description:"Installation",source:"@site/docs/basic-tutorials/setting-up-jar-template.md",sourceDirName:"basic-tutorials",slug:"/basic-tutorials/setting-up-jar-template",permalink:"/JAR-Template/basic-tutorials/setting-up-jar-template",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Setting Up JAR Template"},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/JAR-Template/basic-tutorials/basic-usage"},next:{title:"Advanced Tutorials",permalink:"/JAR-Template/advanced-tutorials/"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Motor Setup",id:"motor-setup",level:2},{value:"VS Code Extension",id:"vs-code-extension",level:3},{value:"Vexcode Pro V5",id:"vexcode-pro-v5",level:3},{value:"Chassis Setup",id:"chassis-setup",level:2},{value:"User Control Programming",id:"user-control-programming",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,r.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"setting-up-jar-template"},"Setting Up JAR Template"),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"If you haven't already, download ",(0,n.yg)("a",{parentName:"li",href:"https://www.vexrobotics.com/vexcode/pro-v5"},"Vexcode Pro V5")," or the ",(0,n.yg)("a",{parentName:"li",href:"https://www.vexrobotics.com/vexcode/vscode-extension"},"VEX VS Code Extension")," and follow the Install Wizard's instructions to install."),(0,n.yg)("li",{parentName:"ol"},"Download JAR-Template by visiting the ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/2775Josh/JAR-Template/releases/latest"},"latest releases page"),' and clicking the "JAR-Template.zip" file.'),(0,n.yg)("li",{parentName:"ol"},'Import the "JAR-Template.zip" file in either VS Code or Vexcode Pro V5.'),(0,n.yg)("li",{parentName:"ol"},'VexCode will prompt you to choose a name for your new JAR-Template project. The actual name is unimportant, just enter something memorable and click "Import".')),(0,n.yg)("h2",{id:"motor-setup"},"Motor Setup"),(0,n.yg)("h3",{id:"vs-code-extension"},"VS Code Extension"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Go to ",(0,n.yg)("inlineCode",{parentName:"li"},"\\include\\robot-config.h")," and add all of your motors using the format ",(0,n.yg)("inlineCode",{parentName:"li"},"extern motor LeftFront;")," without quotation marks, for each motor. The above line declares a motor named LeftFront."),(0,n.yg)("li",{parentName:"ol"},"Go to ",(0,n.yg)("inlineCode",{parentName:"li"},"\\src\\robot-config.cpp")," and add all of your motors using the format ",(0,n.yg)("inlineCode",{parentName:"li"},"motor LeftFront = motor(PORT1, ratio6_1, false);"),". The above line defines a motor called LeftFront plugged into PORT1, with a 600 RPM cartridge, not reversed.")),(0,n.yg)("h3",{id:"vexcode-pro-v5"},"Vexcode Pro V5"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Click the port icon in the top right corner of the app."),(0,n.yg)("li",{parentName:"ol"},'For each motor, choose "Add a Device" and choose a name, port, cartridge, and direction for your motor. Unlike in VS Code, this configurer will update ',(0,n.yg)("inlineCode",{parentName:"li"},"robot-config.cpp")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"robot-config.h")," automatically.")),(0,n.yg)("h2",{id:"chassis-setup"},"Chassis Setup"),(0,n.yg)("p",null,"Go to ",(0,n.yg)("inlineCode",{parentName:"p"},"\\src\\main.cpp")," and follow the directions, starting at the top of the file, to set up your chassis. Importantly, do not add motor groups, ports, or sensors that are not in the file already."),(0,n.yg)("h2",{id:"user-control-programming"},"User Control Programming"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"In ",(0,n.yg)("inlineCode",{parentName:"li"},"\\src\\main.cpp"),", scroll down to the ",(0,n.yg)("inlineCode",{parentName:"li"},"void usercontrol()")," function and write your driver control code. JAR Template takes care of your chassis control, with a choice of tank, arcade, and holononmic drive, but you'll need to code any other motors, mechanisms, and sensors yourself."),(0,n.yg)("li",{parentName:"ol"},"Test that your motors are set up and reversed properly by downloading and running the project and driving it around.")))}u.isMDXComponent=!0}}]);