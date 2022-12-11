import {Grid, NavBar, TopNavBar, CampoTexto, Imagem, SpiderManBanner, PurchaseButton, Miles, HomemAranha, MostPlayed, Accessoriess, AccessoriesIcons,
Library, Divisoria, RightSide, NotifyArea, Social, Update, UpdateArea, Chamada, ChamadaArea} from './Estilos'
import styled, {createGlobalStyle} from 'styled-components'
import HomeIcon1 from './Icons/home_n78899yzxc0v.svg'
import FriendsIcon from './Icons/friends_qtkti482cope.svg'
import Storeicon from './Icons/store_5kudo7lqjv6b.svg'
import PhotoIcon from './Icons/photo_1rcy110t2c18.svg'
import Search from './Icons/Search.svg'
import SpiderMan from './Icons/SpiderMan.png'
import GameBox from './Components/GameBox'
import Ghost from './Icons/GhostTsushima.jpg'
import GodOfWar from './Icons/GodOfWar.webp'
import RocketLeague from './Icons/RocketLeague.jpg'
import EldenRing from './Icons/EldenRing.jpg'
import GamePad from './Icons/GamePad.png'
import HeadSet from './Icons/Headset.png'
import GamesLibrary from './Components/GamesLibrary'
import CyberPunk from './Icons/CyberPunk.webp'
import Mario from './Icons/Mario.webp'
import HaloInf from './Icons/HaloInf.jpg'
import Forza from './Icons/Forza.webp'
import GamePadIcon from './Icons/GamePadIcon.png'
import Option from './Icons/Option.png'
import Notificacao from './Components/Notificacao'
import Friends from './Components/Friends'
import NotifyIcon from './Icons/Notify.png'
import Shopping from './Icons/Shopping.png'
import User from './Icons/User.png'
import LinkZelda from './Icons/LinkZelda.jpg'
import RedTrainer from './Icons/RedTrainer.jpg'
import SendIcon from './Icons/SendIcon.png'
import CallIcon from './Icons/CallIcon.png'
import InsideChamada from './Components/InsideChamada'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  body {
    background-color: #191B1F;
    width: 100%;
    height: 100vh;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Grid>
      <NavBar>
        <Imagem src={HomeIcon1}/>
        <Imagem src={FriendsIcon}/> 
        <Imagem src={Storeicon}/> 
        <Imagem src={GamePadIcon}/> 
        <Imagem src={PhotoIcon}/> 
        <Imagem src={Option}/> 
      </NavBar>
      <div>
      <TopNavBar>
         <div>
          <CampoTexto id='Pesquisa' type='text' placeholder='Search'/>
         </div>
        </TopNavBar>
        <SpiderManBanner>
          <div>
            <p>New</p>
            <h2>Marvel Spider Man: <br /> Miles Morales</h2>
            <PurchaseButton>
              <p>$69</p>
              <button>Purchase</button>
            </PurchaseButton>
          </div>
          <HomemAranha>
          <Miles src={SpiderMan}/>
          </HomemAranha>
        </SpiderManBanner>
        <h3>Most Played Games</h3>
        <MostPlayed>
          <GameBox imagem = {Ghost} name = {'Ghost of Tsushima'}/>
          <GameBox imagem = {GodOfWar} name = {'God of War Ragnarok'}/>
          <GameBox imagem = {RocketLeague} name = {'Rocket League'}/>
          <GameBox imagem = {EldenRing} name = {'Elden Ring'}/>
        </MostPlayed>
        <Divisoria>
        <Accessoriess>
          <div>
            <p>Accessories</p>
          </div>
          <AccessoriesIcons>
          <img src={GamePad} alt="GamePad" />
      </AccessoriesIcons>
        </Accessoriess>
        <Library>
          <div>
            <p>Library</p>
          </div>
          <div>
          <GamesLibrary Imagem = {CyberPunk} nome = 'Cyber Punk' console = {'XboxOne'} data = {'19 Dec'}/>
          <GamesLibrary Imagem = {HaloInf} nome = 'Halo Infinite' console = {'XboxOne'} data = {'12 Dec'}/>
          <GamesLibrary Imagem = {Forza} nome = 'ForzaHorizon' console = {'XboxOne'} data = {'20 Jun'}/>
        </div>
        </Library>
        </Divisoria>
      </div>      
        <RightSide>
          <NotifyArea>
            <Notificacao imagem={NotifyIcon}/>
            <Notificacao imagem={Shopping}/>
            <Notificacao imagem={User}/>
          </NotifyArea>
            <Social>
              <p>Social</p>
              <UpdateArea>
                <Update>
                  <h3>Rocket League Update</h3>
                  <h2>58%</h2>
                </Update>
              </UpdateArea>
              <p>ONLINE - 1</p>
              <div>
                <Friends Imagem = {Mario} nome = "Matheus" data = "Online"/>
                <Friends Imagem = {LinkZelda} nome = "Henrique" data = "Offline"/>
                <Friends Imagem = {RedTrainer} nome = "Strifexss" data = "Offline"/>
              </div>
              <ChamadaArea>
                <Chamada>
                  <InsideChamada Text = "Start Call" Imagem = {CallIcon}/>
                  <InsideChamada Text = "Type Text" Imagem = {SendIcon}/>
                </Chamada>
              </ChamadaArea>
            </Social>
        </RightSide>

    </Grid>
    </>
  );
}

export default App;
