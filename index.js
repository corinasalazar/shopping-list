/* eslint-disable strict */
$(function() {
  $('#js-shopping-list-form').on('submit', function(e){
      e.preventDefault();
      let newItem = $('#shopping-list-entry').val();
      let listTemplate = `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
    $('.shopping-list').append(listTemplate);
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
      $(this).closest('li').remove();
  });

});