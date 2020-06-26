import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight, FiChevronLeft, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import guProfile from '../../assets/gu-profile1-transp.png';
import VideoCard from '../../components/VideoCard';
import checked from '../../assets/checked16.png';
import check from '../../assets/check16.png';
import layerbasic from '../../assets/layerbasic.png';
import layerpremium from '../../assets/layerpremium.png';
import layermax from '../../assets/layermax.png';

import {
  Container,
  Header,
  Intro,
  Highlights,
  Prices,
  VideoCardList,
} from './styles';

const Dashboard: React.FC = () => {
  const VideoList: string[] = [
    'https://clips.twitch.tv/embed?clip=IntelligentModernShieldTebowing&parent=localhost&muted=true&autoplay=true',
    'https://clips.twitch.tv/embed?clip=BreakableAbnegateDoveKreygasm&parent=localhost&muted=true&autoplay=true',
    'https://clips.twitch.tv/embed?clip=FaintDeafSproutOSkomodo&parent=localhost&muted=true&autoplay=true',
    'https://clips.twitch.tv/embed?clip=ArtsyEvilWoodpeckerDoggo&parent=localhost&muted=true&autoplay=true',
    'https://clips.twitch.tv/embed?clip=MuddyHedonisticDragonflyMVGame&parent=localhost&muted=true&autoplay=true',
    'https://clips.twitch.tv/embed?clip=DistinctObservantEagleCopyThis&parent=localhost&muted=true&autoplay=true',
  ];

  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              Home
              <hr />
            </li>
            <li>
              Highlights
              <hr />
            </li>
            <li>
              Valores
              <hr />
            </li>
          </ul>
        </nav>
        <div id="Info">
          <ul>
            <li>Gustavo Cordeiro</li>
            <li>Desempregado mas experiente</li>
            <li>Só balinha</li>
          </ul>
        </div>
      </Header>
      <Intro>
        <div id="imgCod" />
        <div id="imgDiv">
          <img
            src={guProfile}
            width="350px"
            height="380px"
            alt="Gustavo Cordeiro"
          />
        </div>
        <div id="imgValor" />
      </Intro>
      <Highlights>
        <h1>V-HIGHLIGHTS</h1>
        <VideoCardList>
          {VideoList.map((videoUrl) => (
            <VideoCard source={videoUrl} />
          ))}
        </VideoCardList>
      </Highlights>
      <Prices>
        <h1>VALORES </h1>
        <div id="listValores">
          <div className="cardPrice">
            <img src={layerbasic} alt="" />
            <h3 className="title titleBasic">BASIC PACKAGE</h3>
            <div className="planos-pagamento__precos">
              <div className="planos-pagamento__preco-parcela">
                <span className="planos-pagamento__numero-parcelas">12X</span>
                <span className="planos-pagamento__valor-parcela">R$12</span>
              </div>
              <div className="planos-pagamento__preco-vista">
                <span className="planos-pagamento__label-vista">
                  à vista R$144
                </span>
                <span className="planos-pagamento__valor-vista" />
              </div>
            </div>
            <ul className="planos-pagamento__vantagens">
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" /> Acesso a plataforma
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Vídeos Exclusivos
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={check} alt="" />
                    Aulas ao vivo
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={check} alt="" />
                    Aulas Particulares
                  </span>
                </div>
                <div className="planos-pagamento__checkmark " />
              </li>
            </ul>
            <a className="planos-pagamento__cta" href="/compra/premium/">
              Matricule-se
            </a>
          </div>
          <div className="cardPrice premiumPrice">
            <img src={layerpremium} alt="" />
            <h3 className="title titlePremium">PREMIUM PACKAGE</h3>
            <div className="planos-pagamento__precos">
              <div className="planos-pagamento__preco-parcela">
                <span className="planos-pagamento__numero-parcelas">12X</span>
                <span className="planos-pagamento__valor-parcela">R$15</span>
              </div>
              <div className="planos-pagamento__preco-vista">
                <span className="planos-pagamento__label-vista">
                  à vista R$180
                </span>
                <span className="planos-pagamento__valor-vista" />
              </div>
            </div>

            <ul className="planos-pagamento__vantagens">
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" /> Acesso a plataforma
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Vídeos Exclusivos
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Aulas ao vivo
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={check} alt="" />
                    Aulas Particulares
                  </span>
                </div>
                <div className="planos-pagamento__checkmark " />
              </li>
            </ul>
            <a className="planos-pagamento__cta" href="/compra/premium/">
              Matricule-se
            </a>
          </div>
          <div className="cardPrice">
            <img src={layermax} alt="" />
            <h3 className="title titleMax">MAX</h3>
            <div className="planos-pagamento__precos">
              <div className="planos-pagamento__preco-parcela">
                <span className="planos-pagamento__numero-parcelas">12X</span>
                <span className="planos-pagamento__valor-parcela">R$18</span>
              </div>
              <div className="planos-pagamento__preco-vista">
                <span className="planos-pagamento__label-vista">
                  à vista R$216
                </span>
                <span className="planos-pagamento__valor-vista" />
              </div>
            </div>

            <ul className="planos-pagamento__vantagens">
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" /> Acesso a plataforma
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Vídeos Exclusivos
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Aulas ao vivo
                  </span>
                </div>
                <div className="planos-pagamento__checkmark planos-pagamento__checkmark--ativo" />
              </li>
              <li className="planos-pagamento__vantagem">
                <div className="planos-pagamento__wrapper planos-pagamento__wrapper--com-descricao">
                  <span className="planos-pagamento__label">
                    <img src={checked} alt="" />
                    Aulas Particulares
                  </span>
                </div>
                <div className="planos-pagamento__checkmark " />
              </li>
            </ul>
            <a className="planos-pagamento__cta" href="/compra/premium/">
              Matricule-se
            </a>
          </div>
        </div>
      </Prices>
    </Container>
  );
};

export default Dashboard;
