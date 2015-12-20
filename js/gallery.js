/**
 * Created by Julia on 12.12.2015.
 */
/* global gallery: true */
'use strict';
( function() {
  /**
   * Конструктор галереи
   * @constructor
   */
  function Gallery() {
    this.element = document.querySelector('.overlay-gallery');
    this._closeButton = document.querySelector('.overlay-gallery-close');
    this._PreviousButton = document.querySelector('.overlay-gallery-control-left');
    this._NextButton = document.querySelector('.overlay-gallery-control-right');
    this._currentPicture = 0;

    this._onLeftClick = this._onLeftClick.bind(this);
    this._onRightClick = this._onRightClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);
  }

  /**
   * показать галерею и добавить подписки на события, которые отслеживает галерея
   */
  Gallery.prototype.show = function() {
    this.element.classList.remove('invisible');

    this._closeButton.addEventListener('click', this._onCloseClick);
    this._PreviousButton.addEventListener('click', this._onLeftClick);
    this._NextButton.addEventListener('click', this._onRightClick);
    window.addEventListener('keydown', this._onDocumentKeyDown);

  };

  /**
   * спрятать галерею и убрать подписки на события, которые отслеживает галерея
   */
  Gallery.prototype.hide = function() {
    this.element.classList.add('invisible');

    this._PreviousButton.removeEventListener('click', this._onLeftClick);
    this._NextButton.removeEventListener('click', this._onRightClick);
    this._closeButton.removeEventListener('click', this._onCloseClick);
    window.removeEventListener('keydown', this._onDocumentKeyDown);
  };

  /**
   * Метод принимает на вход массив объектов Photo и сохраняет его
   * @param {Array} ArrayPhoto
   */
  Gallery.prototype.setPictures = function(ArrayPhoto) {
    this._photos = ArrayPhoto;
  };

  /**
   * Метод берет фотографию с переданным индексом из массива фотографий
   * и отрисовывает её в галерее
   * @param {number} number
   */
  Gallery.prototype.setCurrentPicture = function(number) {

    var preview = document.querySelector('.overlay-gallery-preview');
    var numberCurrent = document.querySelector('.preview-number-current');
    var numberTotal = document.querySelector('.preview-number-total');

    this._currentPicture = number;
    var photo = this._photos[number];
    preview.appendChild(photo.getPhoto());
    numberCurrent.innerHTML = '' + number + 1;
    numberTotal.innerHTML = '' + this._photos.length;
  };

  /**
   * Обработчик события клика по кнопке, закрывающей галерею
   * @private
   */
  Gallery.prototype._onCloseClick = function() {
    this.hide();
  };

  /**
   * Обработчик события клика на Esc
   * @param {Event} event
   * @private
   */
  Gallery.prototype._onDocumentKeyDown = function(event) {
    if (event.keyCode === 27) {
      this.hide();
    }
    if (event.keyCode === 37) {
      this._onLeftClick();
    }
    if (event.keyCode === 39) {
      this._onRightClick();
    }
  };

  /**
   * Обработчик события клика по кнопке "предыдущее фото" в галерее
   * @private
   */
  Gallery.prototype._onLeftClick = function() {
    if (this._currentPicture - 2) {
      this.setCurrentPicture(this._currentPicture - 1);
    }
  };

  /**
   * Обработчик события клика по кнопке "следующее фото" в галерее
   * @private
   */
  Gallery.prototype._onRightClick = function() {
    if (this._currentPicture + 1 < this._photos.length) {
      this.setCurrentPicture(this._currentPicture + 1);
    }
  };

  /**
   *
   * @type {Gallery}
   */

  var photogallery = document.querySelector('.photogallery');

  /**
   * Обработчик события клика на фотографии фотогалереи
   * @param {Event} event
   */
  photogallery.onclick = function(event) {
    var clickedElement = event.target;
    if (clickedElement.tagName === 'IMG') {
      event.preventDefault();
      this._photos.forEach(function(element, i) {
        if (clickedElement === element.getPhoto()) {
          this._currentPicture = i;
        }
      });
      gallery.show();
      gallery.setCurrentPicture(this._currentPicture);
    }
  };

  window.Gallery = Gallery;
})();
