const changePicture = (imgSelector) => {
        const blocks = document.querySelectorAll(imgSelector);

        blocks.forEach(pick => {
            pick.addEventListener('mouseover', (e) => {
                const target = e.target;
                const parent = document.querySelectorAll(`.${e.target.parentNode.className}`);
                function showPar(i = 0) {
                    console.log(parent[i].className);
                    const img = document.querySelectorAll(`.${parent[i].className} img`);
                    img[i].src = img[i].src.replace(/\.[^/.]+$/, "")+'-1.png';

                    const child = document.querySelectorAll(`.${parent[i].className} .parm`);
                    console.log(child);
                    child[i].style.display = 'none';
                }
                parent.forEach((par, i)=> {
                    if(target === par || target.parentNode == par){
                        showPar(i);  
                    }
                });
            });

            pick.addEventListener('mouseout', (e) => {
                const target = e.target;
                const parent = document.querySelectorAll(`.${e.target.parentNode.className}`);
                function hidePar(i = 0) {
                    console.log(parent[i].className);
                    const img = document.querySelectorAll(`.${parent[i].className} img`);
                    img[i].src = img[i].src.slice(0, -6)+'.png';

                    const child = document.querySelectorAll(`.${parent[i].className} .parm`);
                    console.log(child);
                    child[i].style.display = 'block';
                }
                parent.forEach((par, i)=> {
                    if(target === par || target.parentNode == par){
                        hidePar(i);
                    }
                });
            });
        });
};

export default changePicture;