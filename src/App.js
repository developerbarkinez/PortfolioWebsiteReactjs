import './App.css';
import Anasayfa from './PortfolyoBölümü/Anasayfa/Giriş/Giriş'
import Hakkımda from './PortfolyoBölümü/HakkımdaSayfası/Hakkımda'
import Özgeçmiş from './PortfolyoBölümü/ÖzgeçmişSayfası/Özgeçmiş'
import Referanslarım from './PortfolyoBölümü/ReferansSayfası/Referans'
import İletişim from './PortfolyoBölümü/İletişimSayfası/iletişim'
import Yorumlar from './PortfolyoBölümü/YorumSayfası/AppYorum'



function App() {
  return (
    <div className="App">
      <Anasayfa/>
      <Hakkımda/>
      <Özgeçmiş/>
      <Referanslarım/>
      <İletişim/>
      <Yorumlar/>

    </div>
  );
}

export default App;
