'use strict';

window.addEventListener('DOMContentLoaded', () => {
        //Tabs
        let tabs = document.querySelectorAll('.tabheader__item'),
                tabsContent = document.querySelectorAll('.tabcontent'),
                tabsParent = document.querySelector('.tabheader__items');

        function hideTabContent() {
                tabsContent.forEach(item => {
                        item.classList.add('hide');
                        item.classList.remove('show', 'fade');
                });
                tabs.forEach(item => {
                        item.classList.remove('tabheader__item_active');
                });
        }


        function showTabContent(i = 0) {
                tabsContent[i].classList.add('show', 'fade');
                tabsContent[i].classList.remove('hide');
                tabs[i].classList.add('tabheader__item_active');
        }
        hideTabContent();
        showTabContent();
        tabsParent.addEventListener('click', (event) => {
                const target = event.target;
                if (target && target.classList.contains('tabheader__item')) {
                        tabs.forEach((item, i) => {
                                if (target == item) {
                                        hideTabContent();
                                        showTabContent(i);
                                }
                        });
                }
        });

        //Timer

        const deadLine = '2021-02-22';

        function getTimeRemaining(endTime) {
                const t = Date.parse(endTime) - Date.parse(new Date()),
                        days = Math.floor(t / (1000 * 60 * 60 * 24)),
                        hours = Math.floor(t / (1000 * 60 * 60) % 24),
                        minutes = Math.floor((t / 1000 / 60) % 60),
                        seconds = Math.floor((t / 1000) % 60);

                return {
                        'total': t,
                        'days': days,
                        'hours': hours,
                        'minutes': minutes,
                        'seconds': seconds
                };
        }

        function getZero(num) {
                if (num >= 0 && num < 10) {
                        return `0${num}`;
                } else {
                        return num;
                }
        }

        function setClock(selector, endTime) {
                const timer = document.querySelector(selector),
                        days = timer.querySelector('#days'),
                        hours = timer.querySelector('#hours'),
                        minutes = timer.querySelector('#minutes'),
                        seconds = timer.querySelector('#seconds'),
                        timeInterval = setInterval(updateClock, 1000);

                updateClock();

                function updateClock() {
                        const t = getTimeRemaining(endTime);

                        days.innerHTML = getZero(t.days);
                        hours.innerHTML = getZero(t.hours);
                        minutes.innerHTML = getZero(t.minutes);
                        seconds.innerHTML = getZero(t.seconds);

                        if (t.total <= 0) {
                                clearInterval(timeInterval);
                        }
                        if (t.total < 0) {
                                timer.innerHTML = `<h3>Акция завершилось</h3>`;
                                timer.classList.add('close');
                        }

                }
        }
        setClock('.timer', deadLine);

        // Modal Способ 1

        // let windowOwn = document.querySelector('.btn_white'),
        //         windowTwo = document.querySelector('.btn_dark'),
        //         modal = document.querySelector('.modal'),
        //         modalClose = modal.querySelector('.modal__close');

        // windowOwn.addEventListener('click', () => {
        //         modal.style.display = 'block';
        //         document.body.style.overflow = 'hidden';

        // });

        // windowTwo.addEventListener('click', () => {
        //         modal.style.display = 'block';
        //         document.body.style.overflow = 'hidden';

        // });

        // modalClose.addEventListener('click', () => {
        //         modal.style.display = 'none';
        //         document.body.style.overflow = '';
        // });
        // Modal Способ 2
        let modalTrigger = document.querySelectorAll('[data-modal]'),
                modal = document.querySelector('.modal'),
                modalClose = modal.querySelector('.modal__close');
                

        modalTrigger.forEach(btn => {
                btn.addEventListener('click', () => {
                        modal.classList.add('show');
                        modal.classList.remove('hide');
                        document.body.style.overflow = 'hidden';
                });
        });
     
        function closeModal () {
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
        }

        modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
              if (e.target === modal) {
                closeModal();
              }
        });

        document.addEventListener('keydown', (e) => {
                if(e.code === 'Escape' && modal.classList.contains('show')) {
                        closeModal();
                }
        });


});