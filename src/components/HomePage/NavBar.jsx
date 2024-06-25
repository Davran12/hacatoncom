import React from "react"
import inst from "./assets/inst.png"
import whatsapp from "./assets/whatsapp.png"
import youtube from "./assets/youtube.png"
import logo from "./assets/LOGO-1-1.png"
import хир from "./assets/хир.jpg"
import хир2 from "./assets/хир2.jpg"
import pngegg from "./assets/pngegg.png"
import calling from "./assets/calling.png"
import photo1 from "./assets/1.png"
import photo2 from "./assets/2.png"
import photo3 from "./assets/3.png"
import photo4 from "./assets/4.png"
import pediator from "./assets/pediator.jpeg"
import osteopat from "./assets/osteopat.jpeg"
import sleth from "./assets/steth.jpg"
import uslugnog from "./assets/uslugnog.jpeg"
import "./style.css"
const NavBar = () => {
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
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href={"/uslug"}>Услуги</a>
            </li>
            <li>
              <a href="#">Хирургия</a>
            </li>
            <li>
              <a href="#">Кардиология</a>
            </li>
            <li>
              <a href={"/doctor"}>Врачи</a>
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
      <div class="slider">
        <div class="slide">
          <img src={хир2} alt="Медицинский фон" />
          <div class="slide-content">
            <h2>Пройдите Комплексный Осмотр Здоровья</h2>
            <p>Качественные и быстрые чекапы по доступным ценам в Бишкеке</p>
            <img src={хир} alt="Логотип" class="logo" />
          </div>
        </div>
        <div class="slide">
          <img src={хир} alt="Медицинский фон" />
          <div class="slide-content">
            <h2>Пройдите Комплексный Осмотр Здоровья</h2>
            <p>Качественные и быстрые чекапы по доступным ценам в Бишкеке</p>
            <img src={хир2} alt="Логотип" class="logo" />
          </div>
        </div>
        <button class="prev" onclick="prevSlide()">
          &#8249;
        </button>
        <button class="next" onclick="nextSlide()">
          &#8250;
        </button>
      </div>
      <div class="header-line-2">
        <div class="container1">
          <h1>Преимущества медицинского центра Авиценна</h1>
          <div class="advantages">
            <div class="advantage">
              <img
                class="img1"
                src={photo1}
                alt="Высококвалифицированные специалисты"
              />
              <h2>Высококвалифицированные специалисты</h2>
              <p>
                Наши врачи - настоящие эксперты с обширным опытом и высокой
                квалификацией, гарантирующие четкое и успешное лечение.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img2"
                src={photo2}
                alt="Современное оборудование и технологии"
              />
              <h2>Современное оборудование и технологии</h2>
              <p>
                Медицинский центр оборудован передовыми технологиями, что
                позволяет нам предоставлять лечение на самом высоком уровне,
                используя современные методы диагностики и хирургических
                вмешательств.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img3"
                src={photo3}
                alt="Индивидуальный подход к каждому пациенту"
              />
              <h2>Индивидуальный подход к каждому пациенту</h2>
              <p>
                Мы понимаем, что каждый пациент уникален. Наша команда врачей
                предоставляет персонализированные планы лечения, учитывая
                особенности каждого случая и обеспечивая заботу, которая
                превосходит ожидания.
              </p>
            </div>
            <div class="advantage">
              <img
                class="img4"
                src={photo4}
                alt="Безопасная и комфортная обстановка"
              />
              <h2>Безопасная и комфортная обстановка</h2>
              <p>
                Наши пациенты находятся в безопасных руках. Мы создали
                комфортную обстановку в медицинском центре, обеспечивая
                исключительные стандарты безопасности и заботы о вашем
                благополучии.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="services-container">
        <h1>Предоставляемые Услуги</h1>
        <div class="services">
          <div class="service">
            <img src={osteopat} alt="Остеопат" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ОСТЕОПАТ</h2>
          </div>
          <div class="service">
            <img src={pediator} alt="Педиатр" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ПЕДИАТР</h2>
          </div>
          <div class="service">
            <img src={sleth} alt="Лор" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ЛОР</h2>
          </div>
          <div class="service">
            <img src={uslugnog} alt="" />
            <p>Лучший сервис по низкой цене</p>
            <h2>ЭЛЕКТРОФОРЕЗ И МАГНИТОТЕРАПИЯ</h2>
          </div>
        </div>
      </div>
      <div class="header-line-3">
        <div class="box">
          <div class="icon">&#9742;</div>
          <h2>КОЛЛ-ЦЕНТР</h2>
          <p class="phone">+996 707 909 001</p>
          <p>
            Операторы нашего колл-центра всегда вас проконсультируют и помогут
            записаться к специалисту!
          </p>
        </div>
        <div class="box2">
          <div class="icon">&#128138;</div>
          <h2>ОПЕРАТИВНАЯ ПОМОЩЬ</h2>
          <p>
            Мы гарантируем быстрый отклик на ваши запросы и оперативную помощь.
          </p>
        </div>
        <div class="box3">
          <div class="icon">&#8986;</div>
          <h2>ЧАСЫ РАБОТЫ</h2>
          <p>
            ПН - ПТ <span>КРУГЛОСУТОЧНО</span>
          </p>
          <p>
            СБ - ВС <span>КРУГЛОСУТОЧНО</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
