import React from "react";
import { useQuery } from "react-query";
import { A, Gravatar, BtnHamburgues } from "@nano";

import { CSSTransition } from "react-transition-group";

interface HeaderProps {
  children?: React.ReactNode;
  where?: string;
}

const Header: React.FC<HeaderProps> = ({ children, where }) => {
  interface LiProps {
    link: string;
    text: string;
  }

  const Title = () => {
    return (
      <div className="titulo">
        <h1>
          UNERG <span style={{ position: "relative", bottom: "1px" }}>|</span>{" "}
          DACE
        </h1>
      </div>
    );
  };

  const Avatar = () => {
    return (
      <li>
        <div className="user-img">
          <Gravatar email={user[0].email} />
        </div>
      </li>
    );
  };

  const Name = () => {
    return (
      <li>
        <span className="name">
          {user[0].firstName} {user[0].firstNurname}
        </span>
      </li>
    );
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/data-demo");
    return res.json();
  };

  const { data: user, isLoading } = useQuery("users", fetchUsers);

  return (
    <header className="header-container">
     
    </header>
  );
};

export default Header;
