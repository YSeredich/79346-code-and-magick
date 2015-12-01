/**
 * Created by Julia on 27.11.2015.
 */
'use strict';
/* global reviews: true */
(function() {
  var reviewsFilter = document.querySelector('.reviews-filter');
  reviewsFilter.classList.add('invisible');

  var container = document.querySelector('.reviews-list');

  reviews.forEach(function(review) {
    var element = getElementFromTemplate(review);
    container.appendChild(element);
  });

  /**
   * @param {Object} data
   * @return {Element}
   */
  function getElementFromTemplate(data) {
    var template = document.querySelector('#review-template');

    if ('content' in template) {
      var element = template.content.children[0].cloneNode(true);
    } else {
      element = template.children[0].cloneNode(true);
    }

    element.querySelector('.review-rating').textContent = data.rating;
    element.querySelector('.review-text').textContent = data.description;
    return element;
  }
})();
