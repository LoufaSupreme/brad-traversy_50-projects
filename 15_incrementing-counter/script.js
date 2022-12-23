const counts = document.querySelectorAll('.count');

counts.forEach(count => {
    let curr = 0;
    const target = +count.dataset.target;
    
    const interval = setInterval(() => {
        let step = Math.floor((target-curr)/10) > 1 ? Math.floor((target-curr)/10) : 1;
        if (curr < target) {
            if (target - curr < step) {
                count.innerText = ++curr;
            }
            else count.innerText = curr+=step; 
        }
        else clearInterval(interval);
    }, 20)
})