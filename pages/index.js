import React from 'react';
import config from '../config.json';
import styled from 'styled-components';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';



function HomePage() {

  const [valorDoFiltro, setValorDoFiltro] = React.useState('');
  
    return (
      <>

          <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu
            valorDoFiltro={valorDoFiltro}
            setValorDoFiltro={setValorDoFiltro}
            />
            <Header/>
            <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}/>
        </div>
      </>
    )
}
  
  export default HomePage;

const StylesHeader = styled.div `
    background-color: ${({theme}) => theme.backgroundLevel1};

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
    }
`


// function Menu() {
//     return (
//       <div>Menu</div>
//     )
//   }

const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${config.bg});
  height: 230px;

`

function Header() {
    return (
      <StylesHeader>
          <StyledBanner />
          <section className='user-info'>
            <img src={`https://github.com/${config.github}.png`}/>
            <div>
              <h2>
                {config.name}
              </h2>
              <p>
                {config.job}
              </p>
            </div>       
          </section>
      </StylesHeader>
    )
}

function TimeLine({searchValue , ...propriedades}) {
  const playlistNames = Object.keys(propriedades.playlists)

    return (
      <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                // console.log(playlistName);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                              
                              const titleNormalized = video.title.toLowerCase();
                              const searchNormalized = searchValue.toLowerCase();
                              return titleNormalized.includes(searchNormalized)
                            }).map((video) => {
                                return (
                                    <a href={video.url} key={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
  