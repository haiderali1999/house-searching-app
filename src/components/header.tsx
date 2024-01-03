import viteLogo from "../assets/houseLogo.jpeg";

interface Props {
  subtitle: string;
}
export default function Header(props: Props) {
  const { subtitle } = props;
  return (
    <>
      <header className="row">
        <div className="col-sm-5">
          <img src={viteLogo} className="logo" alt="logo" />
        </div>
        <div className="col-sm-7 mt-5 subtitle">{subtitle}</div>
      </header>
    </>
  );
}

// import { Component, ReactNode } from "react";
// import viteLogo from "../assets/react.svg";

// interface HeaderProps {
//   subtitle: string;
// }

// class Header extends Component<HeaderProps> {
//   render(): ReactNode {
//     const { subtitle } = this.props;

//     return (
//       <header className="row">
//         <div className="col-sm-5">
//           <img src={viteLogo} className="logo" alt="logo" />
//         </div>
//         <div className="col-sm-7 mt-5 subtitle">{subtitle}</div>
//       </header>
//     );
//   }
// }

// export default Header;
