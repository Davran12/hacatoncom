import React from "react"
import inst from "./assets/inst.png"
import whatsapp from "./assets/whatsapp.png"
import youtube from "./assets/youtube.png"
import calling from "./assets/calling.png"
import pngegg from "./assets/pngegg.png"
import uslug from "./assets/uslugnog.jpeg"
import doc1 from "./img/doc1.jpg"
import doc2 from "./img/doc2.jpeg"
import doc3 from "./img/doc3.jpg"
import fonn from "./img/fonn.jpg"
const DoctorPage = () => {
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
              <img src="./assets/LOGO-1-1.png" alt="Логотип" class="logo-img" />
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
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href={uslug}>Услуги</a>
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

      <div class="header">
        <div class="header-content">
          <img src={fonn} alt="" />
        </div>
      </div>

      <div class="container">
        <div class="stats">
          <div class="stat-item">
            <span class="stat-number">25000+</span>
            <span class="stat-text">Довольных пациентов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">137</span>
            <span class="stat-text">Опытных докторов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">5 филиалов</span>
            <span class="stat-text">С единой базой данных</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">19 лет +</span>
            <span class="stat-text">Средний стаж работы</span>
          </div>
        </div>
        <div class="description">
          <p>
            Команда врачей состоит из кандидатов медицинских наук, врачей высшей
            категории и профессионалов, которые улучшают свои навыки каждый
            день.
          </p>
          <p>
            Мы работаем с любовью и готовы помочь вам с вашей проблемой,
            переходите на наши социальные сети или запишитесь на прием к врачу.
          </p>
        </div>
      </div>

      <h1>
        Врачи филиала <i>Бакаева 106</i>
      </h1>
      <div class="container">
        <div class="card">
          <img src={doc1} alt="Doctor 1" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Джумагулова Айнагуль Секеналиевна</p>
            <button>Записаться на прием</button>
          </div>
        </div>
        <div class="card">
          <img src={doc2} alt="Doctor 2" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Иманакунова Жамиля Шейшекеева</p>
            <button>Записаться на прием</button>
          </div>
        </div>
        <div class="card">
          <img src={doc3} alt="Doctor 3" />
          <div class="card-content">
            <h3>Кардиолог</h3>
            <p>Романова Татьяна Анатольевна</p>
            <button>Записаться на прием</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorPage
