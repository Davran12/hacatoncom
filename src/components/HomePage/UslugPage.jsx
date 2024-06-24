import React from "react"
import whatsapp from "./assets/whatsapp.png"
import youtube from "./assets/youtube.png"
import inst from "./assets/inst.png"
import pngegg from "./assets/pngegg.png"
import logo from "./assets/LOGO-1-1.png"
import calling from "./assets/calling.png"
import kopm from "./img/komp.jpeg"
import gastr from "./img/gastr.jpg"
import heart from "./img/heart.jpg"
const UslugPage = () => {
  return (
    <div>
      <header>
        <div class="top-bar">
          <div class="working-hours">
            <p>Часы работы: круглосуточно!</p>
          </div>
          <div class="social-icons">
            <div class="icon-container">
              <img src={inst} alt="Instagram Icon" />
            </div>
            <div class="icon-container">
              <img src={whatsapp} alt="WhatsApp Icon" />
            </div>
            <div class="icon-container">
              <img src={youtube} alt="YouTube Icon" />
            </div>
          </div>
        </div>
        <nav class="navbar">
          <div class="navbar-container">
            <div class="logo">
              <img src={logo} alt="Логотип" class="logo-img" />
            </div>
            <div class="contact-info">
              <div class="contact-item">
                <img src={pngegg} alt="" />
                <p>
                  Email
                  <br />
                  <span>call-center@expresslab.kg</span>
                </p>
              </div>
              <div class="contact-item">
                <img src={calling} alt="" />
                <p>
                  Позвонить Нам
                  <br />
                  <span>0707 909 001</span>
                </p>
              </div>
              <button class="cta-button">Вызов на дом</button>
            </div>
          </div>
        </nav>
        <nav class="main-nav">
          <ul>
            <li>
              <a href="./index.html">Главная</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="./uslug.html">Услуги</a>
            </li>
            <li>
              <a href="#">Хирургия</a>
            </li>
            <li>
              <a href="#">Кардиология</a>
            </li>
            <li>
              <a href="#">Врачи</a>
            </li>
            <li>
              <a href="#">Чекапы</a>
            </li>
            <li>
              <a href="#">Стационар</a>
            </li>
            <li>
              <a href="#">Медицинский колледж</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="container">
        <h1>Услуги медицинского центра Авиценна</h1>
        <p>
          Клиника Авиценна – территория здоровья, где каждый пациент получает
          индивидуальный комплексный подход и доступ к лучшим медицинским
          технологиям.
        </p>
        <div class="tabs">
          <button class="tab-btn active " onclick="showContent('specialists')">
            Врачи-Специалисты
          </button>
          <button class="tab-btn" onclick="showContent('diagnostics')">
            Диагностика
          </button>
          <button class="tab-btn" onclick="showContent('procedures')">
            Лечебные Процедуры
          </button>
          <button class="tab-btn" onclick="showContent('prevention')">
            Профилактика И Вакцинация
          </button>
        </div>
        <div id="specialists" class="tab-content active">
          <h2>Врачи-Специалисты</h2>
          <div class="service">
            <img src={kopm} alt="Компьютерная томография" />
            <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
          </div>
          <div class="service">
            <img src={gastr} alt="Гастроскопия" />
            <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
          </div>
          <div class="service">
            <img src={heart} alt="Суточный мониторинг сердца" />
            <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
          </div>
        </div>
        <div id="diagnostics" class="tab-content">
          <h2>Диагностика</h2>
          <div class="service">
            <img src={kopm} alt="Компьютерная томография" />
            <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
          </div>
          <div class="service">
            <img src={gastr} alt="Гастроскопия" />
            <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
          </div>
          <div class="service">
            <img src={heart} alt="Суточный мониторинг сердца" />
            <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
          </div>
        </div>
        <div id="procedures" class="tab-content">
          <h2>Лечебные Процедуры</h2>
          <div class="service">
            <img src={kopm} alt="Компьютерная томография" />
            <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
          </div>
          <div class="service">
            <img src={gastr} alt="Гастроскопия" />
            <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
          </div>
          <div class="service">
            <img src={heart} alt="Суточный мониторинг сердца" />
            <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
          </div>
        </div>
        <div id="prevention" class="tab-content">
          <h2>Профилактика И Вакцинация</h2>
          <div class="service">
            <img src="./img/komp.jpeg" alt="Компьютерная томография" />
            <h3>КОМПЬЮТЕРНАЯ ТОМОГРАФИЯ</h3>
          </div>
          <div class="service">
            <img src="./img/gastr.jpg" alt="Гастроскопия" />
            <h3>ГАСТРОСКОПИЯ (ЭГДС)</h3>
          </div>
          <div class="service">
            <img src="./img/heart.jpg" alt="Суточный мониторинг сердца" />
            <h3>СУТОЧНЫЙ МОНИТОРИНГ СЕРДЦА</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UslugPage
