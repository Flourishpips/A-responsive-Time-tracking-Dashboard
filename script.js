 const data = {
      daily: {
        work:     { current: "5hrs",  prev: "Yesterday - 7hrs"  },
        play:     { current: "1hr",   prev: "Yesterday - 2hrs"  },
        study:    { current: "0hrs",  prev: "Yesterday - 1hr"   },
        exercise: { current: "1hr",   prev: "Yesterday - 1hr"   },
        social:   { current: "1hr",   prev: "Yesterday - 3hrs"  },
        selfcare: { current: "0hrs",  prev: "Yesterday - 1hr"   },
      },
      weekly: {
        work:     { current: "32hrs", prev: "Last Week - 36hrs" },
        play:     { current: "10hrs", prev: "Last Week - 8hrs"  },
        study:    { current: "4hrs",  prev: "Last Week - 7hrs"  },
        exercise: { current: "4hrs",  prev: "Last Week - 5hrs"  },
        social:   { current: "5hrs",  prev: "Last Week - 10hrs" },
        selfcare: { current: "0hrs",  prev: "Last Week - 2hrs"  },
      },
      monthly: {
        work:     { current: "103hrs", prev: "Last Month - 128hrs" },
        play:     { current: "23hrs",  prev: "Last Month - 29hrs"  },
        study:    { current: "13hrs",  prev: "Last Month - 19hrs"  },
        exercise: { current: "11hrs",  prev: "Last Month - 18hrs"  },
        social:   { current: "21hrs",  prev: "Last Month - 23hrs"  },
        selfcare: { current: "7hrs",   prev: "Last Month - 11hrs"  },
      },
    };

    const categories = ["work", "play", "study", "exercise", "social", "selfcare"];
    const buttons = document.querySelectorAll('.period-btn');

    function setActive(activeBtn) {
      buttons.forEach(btn => {
        const bar = btn.querySelector('.underline-bar');
        
        btn.classList.remove('text-white');
        btn.classList.add('text-[#7678b6]', 'hover:text-white');
        bar.classList.remove('w-full');
        bar.classList.add('w-0');
      });
      // mark clicked button active
      activeBtn.classList.add('text-white');
      activeBtn.classList.remove('text-[#7678b6]', 'hover:text-white');
      const activeBar = activeBtn.querySelector('.underline-bar');
      activeBar.classList.remove('w-0');
      activeBar.classList.add('w-full');
    }

    function setData(period) {
      
      const currEls = document.querySelectorAll('.stat-current');
      const prevEls = document.querySelectorAll('.stat-prev');
      [...currEls, ...prevEls].forEach(el => {
        el.classList.add('opacity-0', 'translate-y-1.5');
      });

      setTimeout(() => {
        categories.forEach(cat => {
          document.getElementById(`${cat}-current`).textContent = data[period][cat].current;
          document.getElementById(`${cat}-prev`).textContent    = data[period][cat].prev;
        });
        // fade back in
        [...currEls, ...prevEls].forEach(el => {
          el.classList.remove('opacity-0', 'translate-y-1.5');
        });
      }, 250);
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        setActive(btn);
        setData(btn.dataset.period);
      });
    });