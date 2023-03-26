const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const option = document.getElementsByClassName('option');


selectBtn.addEventListener('click', function () {
    selectBtn.classList.toggle('active');
});



for (options of option) {
    options.onclick = function () {
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    }
}

function Dropdown() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE-edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>DropDown</title>
                            <link rel="stylesheet" href="textstyles.css">
                            </head>
                            <body>

                                <div class="select-menu">
                                    <div class="select-btn" id="select-btn">
                                        <span id="text">Select Plant Type</span>
                                        <ion-icon name="color-fill-outline" class="icon-arrow"></ion-icon>
                                    </div>

                                    <ul class="list">
                                        <li class="option" style="--i:6;">
                                            <img src="https://img.freepik.com/premium-vector/tropical-plant-icon_118813-3026.jpg?w=2000"
                                                width="40"
                                                height="40">
                                                <span class="option-text">Tropical Plant</span>
                                        </li>
                                        <li class="option" style="--i:5;">
                                            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/481/519/small/illustration-of-sensitive-plant-or-mimosa-pudica-isolated-on-white-background-vector.jpg"
                                                width="40"
                                                height="40">
                                                <span class="option-text">Cold-Sensitive Plant</span>
                                        </li>
                                        <li class="option" style="--i:4;">
                                            <img src="https://previews.123rf.com/images/berkut2011/berkut20111803/berkut2011180300495/98028073-seedling-icon-vector-growing-tree-green-agriculture.jpg"
                                                width="40"
                                                height="40">
                                                <span class="option-text">Seedling</span>
                                        </li>
                                        <li class="option" style="--i:3;">
                                            <img src="https://media.istockphoto.com/id/1191967761/vector/saguaro-cactus-color-icon.jpg?s=612x612&w=0&k=20&c=bOrNPMK2CgBG7rYAgrbbOBgKvJ_TIThz09iWXFGBdVs="
                                                width="40"
                                                height="40">
                                                <span class="option-text">Succulent and Cactus</span>
                                        </li>
                                        <li class="option" style="--i:2;">
                                            <img src="https://img.freepik.com/premium-vector/hydroponics-logo-vector-illustration-design-template_598213-2251.jpg?w=2000"
                                                width="40"
                                                height="40">
                                                <span class="option-text">Hydroponic Plant</span>
                                        </li>
                                        <li class="option" style="--i:1;">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PUMLQnvFzghr_HrkTIK1FhNREJV_mL0f6w&usqp=CAU"
                                                width="40"
                                                height="40">
                                                <span class="option-text">Indoor Plant</span>
                                        </li>

                                </div>
                                <style>
                                    @import url ('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');


                                    * {
                                        margin: 0;
                                    padding: 0;
                                    box-sizing: border-box;
                                    font-family: 'Poppins', sans-serif;
}

                                    body {
                                        display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    min-height: 100vh;
                                    background: linear-gradient(45deg, #8460ed, #ff1252);
}

                                    .select-menu {
                                        width: 380px;
                                    margin: 150px auto;
}

                                    .select-menu .select-btn {
                                        position: relative;
                                    top: -140px;
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    height: 55px;
                                    background: #fff;
                                    color: #333;
                                    font-size: 18px;
                                    padding: 20px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
}


                                    .select-btn .icon-arrow {
                                        font - size: 25px;
                                    transition: 1s;
}

                                    .select-btn.active .icon-arrow{
                                        transform: rotate(27deg);

}



                                    .select-menu .list {
                                        position: absolute;
                                    top: 255px;
                                    width: 380px;
                                    transform: translate(0px);
                                    margin-top: 10px;
}

                                    .list .option {

                                        display: flex;
                                    align-items: center;
                                    width: 100%;
                                    height: 55px;
                                    background: #fff;
                                    padding: 0 16px;
                                    cursor: pointer;
                                    transform-origin: top;
                                    opacity: 0;
                                    transform: scale(0) translateY(-65px);
                                    margin-bottom: -55px;
                                    transition: opacity .5s ease-in-out, transform .5s ease-in-out, margin-bottom .5s ease-in-out;
                                    transition-delay: calc(.1s * var(--i));
  }

                                    .select-btn.active~.list .option{
                                        transition: opacity 1s ease-in-out, transform .5s ease-in-out, margin-bottom .2s ease-in-out;
                                    transition-delay: calc(.1s * var(--i));
                                    opacity: 1;
                                    transform: scale(1) translateY(0);
                                    margin-bottom: 0;
  }


                                    .list .option:hover {
                                        background: #bbd0c9;

  }

                                    .list .option:nth-child(1) {
                                        border - top - left - radius: 8px;
                                    border-top-right-radius:8px;
  }

                                    .list .option:nth-child(6) {
                                        border - bottom - left - radius: 8px;
                                    border-bottom-right-radius: 8px;
  }


                                    .option .icon{
                                        font - size: 25px;
                                    margin-right: 12px;
  }

                                    .option .option-text {
                                        font - size: 18px;
                                    color: #333;
  }

                                </style>


                                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>


                                <script src="script.js"></script>


                            </body>
                        </html>

                        )
}


export default Dropdown;


