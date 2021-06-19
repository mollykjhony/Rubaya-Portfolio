/*=========== MENU SHOW Y HIDDEN ===========*/
const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClsoe = document.getElementById('nav__close');

      /*============ Menu Show  ===========*/
      /* Validate if constant exists */
      if(navToggle) {
          navToggle.addEventListener('click', () => {
              navMenu.classList.add('show-menu')
          })
      }
    
      /* Menu Hidden */
      /* Validate if constant exists */
      if(navClsoe) {
          navClsoe.addEventListener('click', () => {
              navMenu.classList.remove('show-menu')
          })
      }


      /*=========== REMOVE MENU AREA ==========*/
      const navLink = document.querySelectorAll('.nav__link');

      function linkAction() {
          const navMenu = document.getElementById('nav__menu');
        //   When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));


      /*=========== ACCORDION SKILLS ==========*/
      const skillsContent = document.getElementsByClassName('skills__content'),
            skillsHeader = document.querySelectorAll('.skills__header')

      function toggleSkills() {
          let itemClass = this.parentNode.className

          for(i = 0; i < skillsContent.length; i++) {
              skillsContent[i].className = 'skills__content skills__close'
          }
          if(itemClass === 'skills__content skills__close') {
              this.parentNode.className = 'skills__content skills__open'
          }
      }

      skillsHeader.forEach((el) => {
          el.addEventListener('click', toggleSkills)
      })


      /*=========== QUALIFICATION SKILLS ==========*/
      const tabs = document.querySelectorAll('[data-target]'),
            tabContents = document.querySelectorAll('[data-content]')

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.querySelector(tab.dataset.target)

                   tabContents.forEach(tabContents => {
                       tabContents.classList.remove('qualification__active')
                   })
                   target.classList.add('qualification__active')

                   tabs.forEach(tab => {
                       tab.classList.remove('qualification__active')
                   })
                   tab.classList.add('qualification__active')
                })
            })

      /*=========== SERVICES MODEL ==========*/
      const modalViews = document.querySelectorAll('.services__modal'),
            modalBtns = document.querySelectorAll('.services__button'),
            modalCloses = document.querySelectorAll('.services__modal-close');

      let modal = function(modalClick) {
          modalViews[modalClick].classList.add('active-modal')
      }

      modalBtns.forEach((modalBtns, i) => {
          modalBtns.addEventListener('click', () => {
              modal(i)
          })
      })

      modalCloses.forEach((modalCloses) => {
          modalCloses.addEventListener('click', () => {
              modalViews.forEach((modalViews) => {
                  modalViews.classList.remove('active-modal')
              })
          })
      })

      /*=========== PORTFOLIO SWIPER ==========*/
        let swiperPortfolio = new Swiper('.portfolio__container', {
            cssMode: true,
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
        },

        });

      /*=========== TESTIMONIAL ==========*/
        let swiperTestimonial = new Swiper('.testimonial__container', {
            grabCursor: true,
            loop: true,
            spaceBetween: 48,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                568: {
                    slidesPerView: 2,
                }
            }
        });

      /*=========== SCROLL SECTIONS ACTIVE LINK ==========*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive() {
            const scrollY = window.pageYOffset

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

                if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

      /*=========== CHANGE BACKGROUND HEADER ==========*/
    
      /*=========== SHOW SCROLL TOP ==========*/
      function scrollUp() {
        const scrollTop = document.getElementById('scroll-up');

        if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollUp)

      /*=========== DARK LIGHT THEME ==========*/
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'fa-sun'

    //Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    //We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

    //We validate if the user previously chose a topic
    if (selectedTheme) {

        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
    }

    //active / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        //Add or remove teh dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        //we save teh theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })












