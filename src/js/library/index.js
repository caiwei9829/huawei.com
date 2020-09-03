import $ from './jquery.js';


let index = function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct.php",
        dataType: "json",
        success: function(res) {
            // console.log(res)
            let temp = '';
            res.forEach((elm, i) => {
                // console.log(elm)
                let picture = JSON.parse(elm.picture);
                // console.log(picture)
                temp += `<li class="item">
                        <a href="./xiangqing.html?id=${elm.id}">
                            <div class="p-picture">
                            <img src="${picture[0].src}" alt="">
                            </div>
                            <div class="p-title">
                               ${elm.title}
                            </div>
                            <div class="p-discounts">
                               ${elm.discounts}
                            </div>
                            <div class="p-price">
                                <span class="yuan">￥</span> ${elm.price}
                            </div>
                        </a>
                    </li>`;
            });
            $('.list').append(temp);
        }
    });
};
export default index;