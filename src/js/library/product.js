import $ from './jquery.js';
import { cookie } from './cookie.js';

let product = function() {
    let id = location.search.split('=')[1]; // 获取id
    console.log(id)

    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            // console.log(res)
            let picture = JSON.parse(res.picture);
            // console.log(picture)
            $('#spname').html(res.title);
            $('#youhui').html(res.discounts);
            $('#xiangqin .jiage span').html('￥' + res.price);
            $('#fdj').css('background', `url(${picture[0].src})`).css('background-size', '100%');
            $('.bigpicture').css('background', `url(${picture[0].src})`).css('background-size', '100%');
            $('#qqq #li1').css('background', `url(${picture[0].src})`).css('background-size', '100%');
            $('#qqq #li2').css('background', `url(${picture[1].src})`).css('background-size', '100%');
            $('#qqq #li3').css('background', `url(${picture[2].src})`).css('background-size', '100%');
            $('#qqq #li4').css('background', `url(${picture[3].src})`).css('background-size', '100%');
            $('#qqq #li5').css('background', `url(${picture[4].src})`).css('background-size', '100%');

            // $('#qqq>li').on('click', function() {
            //     $('#fdj').css('background', this.style.background);
            //     //放大镜图片
            //     $('.bigpicture').css('background', this.style.background);
            // });
            $('#qqq>li').on('mouseover', function() {
                $('#fdj').css('background', this.style.background);
                //放大镜图片
                $('.bigpicture').css('background', this.style.background);
            });

            addItem(res.id, res.price);

        }
    });



    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据

        let product = {
            id: id,
            price: price,
            num: num
        };

        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }

        } else {
            shop = [];
            shop.push(product);
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }
};
export default product;