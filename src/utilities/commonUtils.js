import Giriş from "../PortfolyoBölümü/Anasayfa/Giriş/Giriş";
import Hakkımda from "../PortfolyoBölümü/HakkımdaSayfası/Hakkımda";
import Özgeçmiş from "../PortfolyoBölümü/ÖzgeçmişSayfası/Özgeçmiş";
import Referanslarım from "../PortfolyoBölümü/ReferansSayfası/Referans";
import İletişim from "../PortfolyoBölümü/İletişimSayfası/iletişim";
import Yorumlar from '../PortfolyoBölümü/YorumSayfası/AppYorum'

export const TOTAL_SCREENS = [
  {
    screen_name: "Anasayfa",
    component: Giriş,
  },
  {
    screen_name: "Hakkımda",
    component: Hakkımda,
  },
  {
    screen_name: "Yapılan İşler",
    component: Özgeçmiş,
  },
  {
    screen_name: "Referanslarım",
    component: Referanslarım,
  },
  {
    screen_name: "İletişim",
    component: İletişim,
  },
  {
    screen_name:"Yorumlar",
    component:Yorumlar
  }
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
