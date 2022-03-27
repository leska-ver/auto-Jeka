document.addEventListener("DOMContentLoaded", function () {

  //Меню(data-target) клик или is-open--is-active//
  document.querySelectorAll(".header__center-item-btn_js").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__center-dropdown_js");

      document.querySelectorAll(".header__center-item-btn_js").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });

      document.querySelectorAll(".header__center-dropdown_js").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__center-list_js")) {
      document.querySelectorAll(".header__center-dropdown_js").forEach(el => {
        el.classList.remove("active-list--item");
      })
      document.querySelectorAll(".header__center-item-btn_js").forEach(el => {
        el.classList.remove("active--btn");
      });
    }
  });



  // burger
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })

  $(document).ready(function(){
    $('#burger').click(function(){
      $(this).toggleClass('open');
    });
  });



  // inputmask - Телефон
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  new window.JustValidate('.form', {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    colorWrong: '#ff0f0f',
    messages: {
      name: {
        required: 'Введите имя',
        minLength: 'Введите 3 и более символов',
        maxLength: 'Запрещено вводить более 15 символов'
      },
      email: {
        email: 'Введите корректный email',
        required: 'Введите email'
      },
      tel: {
        required: 'Введите телефон',
        function: 'Здесь должно быть 10 символов без +7'
      },
      text: {
        required: 'Введите Select Service',
        minLength: 'Введите 15 и более символов',
        maxLength: 'Запрещено вводить более 25 символов'
      }
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

         
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      thisForm.reset();
    }
  });



  //Меню(Флаги) клик или is-open--is-active//
const params = {
  btnClassName: "header__bottom-item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();



// Табы (gallery__bay Каталог-фото ремонт авто)
const allTabBtns = document.querySelectorAll('.js-tabs-btn');

  allTabBtns.forEach(function(tabsBtn) {  
    tabsBtn.addEventListener('click', function(event) {

      // event.preventDefault();//Отменяем клик ссылке

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      allTabBtns.forEach(function (el) {
        el.classList.remove('is-active');
      });

      this.classList.add('is-active');
    })  
  })


  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    });
  });

});