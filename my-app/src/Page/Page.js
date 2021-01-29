import "./Page.css";

// const Page = ({ 
//   active, title, children,
//  }) => {

//   let className = 'mainpage';

//   if (active) {
//     className += 'mainpage--active',
//   }
  
//    return (
//   <div className={className}>
//     <div className="page_title">
//       <h1 className="page_title_font">{title}</h1>
//     </div>
//     <div className="page_content">{children}</div>
//   </div>
// );
// }

const Page = ({ 
  active, title, children,
 }) =>  (
  <div className="mainpage">
    <div className="page_title">
      <h1 className="page_title_font">{title}</h1>
    </div>
    <div className="page_content">{children}</div>
  </div>
);


export default Page;
