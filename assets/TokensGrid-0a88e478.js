import{j as e}from"./jsx-runtime-a51fe075.js";const n=({tokens:r,hasRemValue:s=!1})=>{const d=Object.entries(r);return e.jsxs("table",{className:"tokens-grid",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Rem"})]})}),e.jsx("tbody",{children:d.map(([a,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:a}),e.jsx("td",{children:t}),s&&e.jsxs("td",{children:[Number(t.replace("rem",""))*16,"px"]})]}))})]})};try{n.displayName="TokensGrid",n.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{n as T};
//# sourceMappingURL=TokensGrid-0a88e478.js.map
