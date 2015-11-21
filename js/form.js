'use strict';
(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };

  // вытянула форму и инпуты имя, отзыв
  var formElement = formContainer.querySelector('.review-form');
  var formReviewName = formElement['review-name'];
  var formReviewText = formElement['review-text'];

  // для оценок вытянула 1 и 2
  var reviewMark1 = formElement['review-mark-1'];
  var reviewMark2 = formElement['review-mark-2'];

  reviewMark1.onclick = function() {
    formReviewText.required = true;
  };

  reviewMark2.onclick = function() {
    formReviewText.required = true;
  };

  // для блока review-fields вытянула блок и 2 ссылки
  var reviewFields = formElement.querySelector('.review-fields');
  var reviewFieldsName = reviewFields.querySelector('.review-fields-name');
  var reviewFieldsText = reviewFields.querySelector('.review-fields-text');

  formReviewName.onchange = function() {
    var contentName = formReviewName.value;
    //var contentText = formReviewText.value;
    if (contentName.lenght !== 0) {
      reviewFieldsName.classList.add('invisible');
    }/*
    if (contentText.lenght != 0) {
      reviewFields.classList.add('invisible');
    };*/
  };

  formReviewText.onchange = function() {
    //var contentName = formReviewName.value;
    var contentText = formReviewText.value;
    if (contentText.lenght !== 0) {
      reviewFieldsText.classList.add('invisible');
    }/*
    if (contentName.lenght != 0) {
      reviewFields.classList.add('invisible');
    };*/
  };





})();
