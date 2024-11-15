document.addEventListener("DOMContentLoaded", () => {
    const check = document.querySelectorAll('#flexSwitchCheckChecked');
    const item = document.querySelectorAll('.item');
    const btn_top = document.querySelectorAll('.btn_top');
    const btn_bottom = document.querySelectorAll('.btn_bottom');
    let height = 1;
    let currentHeight = [];

    function checkFunction() {
        currentHeight = []
        check.forEach((item, index) => {
            if (item.checked) {
                currentHeight.push(index)
            }
        });
    }



    btn_top.forEach((element, i) => {

        element.addEventListener('click', () => {
            let id;
            switch (i) {
                case 0:
                    id = 3;
                    break;
                case 1:
                    id = 2;
                    break;
                case 2:
                    id = 1;
                    break;
                case 3:
                    id = 0;
                    break;
            }
            checkFunction();
            if (currentHeight.length >= 1) {
                console.log(height);
                
                for (let index = 0; index < currentHeight.length; index++) {                    
                    item[currentHeight[index]].style.bottom = `${(id + 1) * 17}vh`;
                    
                }
            }
            else {
                alert("Liftlarni activlashtring")
            }


        })
    })

    btn_bottom.forEach((element, i) => {
        element.addEventListener('click', () => {
            checkFunction();
            if (currentHeight.length >= 1) {
                for (let index = 0; index < currentHeight.length; index++) {
                    item[currentHeight[index]].style.bottom = `${68 - 17 * (i + 1)}vh`
                }
            }
            else {
                alert("Liftlarni activlashtring")
            }


        })
    })

})