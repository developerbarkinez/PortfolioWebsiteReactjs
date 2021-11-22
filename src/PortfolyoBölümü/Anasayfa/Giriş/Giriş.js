import React from "react";
import Profil from "../Profil/Profil";
import AltBilgi from "../AltBilgi/AltBilgi";
import Başlık from "../Başlık/Başlık";

import "./Giriş.css";

/*Daha Kolay Yönetilebilmesi için Header,Profile,Footer olacak şekilde 3 Componente ayırdım.*/
export default function Home() {
  return (
    <div className="home-container">
      <Başlık />
      <Profil />
      <AltBilgi />
    </div>
  );
}