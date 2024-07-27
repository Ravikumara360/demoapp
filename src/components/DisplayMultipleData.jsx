import { useEffect, useState } from "react";

const DisplayMultipleData = () => {

    let [products, setProducts] = useState(
        [
            {
                Pname: "Black shoes",
                brand: "Puma",
                price: "5000",
                pic: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/377995/01/sv01/fnd/IND/fmt/png/Redeem-Profoam-Unisex-Running-Shoes"
            },
            {
                Pname: "Brown shoes",
                brand: "Nike",
                price: "15000",
                pic: "https://assets.ajio.com/medias/sys_master/root/20231005/LpGi/651ed85cafa4cf41f52a36db/-473Wx593H-462163133-brown-MODEL.jpg"
            },
            {
                Pname: "skyblue shoes",
                brand: "Reebok",
                price: "4000",
                pic: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLO1008/8-800x800.jpg"
            },
            {
                Pname: "White shoes",
                brand: "Bata",
                price: "6000",
                pic: "https://www.campusshoes.com/cdn/shop/products/RAISE_WHT_f1a5a2ec-8a23-4795-a796-0da7455dc57a.jpg?v=1705476016"
            }
            , {
                Pname: " red shoes",
                brand: "Lancer Puma",
                price: "3000",
                pic: "https://assets.ajio.com/medias/sys_master/root/20230412/G60D/6436c3d0711cf97ba71d9850/-1117Wx1400H-469425399-red-MODEL.jpg"
            }, {
                Pname: "Blue shoes",
                brand: "Puma",
                price: "5000",
                pic: "https://assets.ajio.com/medias/sys_master/root/20230621/JF7b/6492bf01d55b7d0c6396b63f/-473Wx593H-464108798-blue-MODEL.jpg"
            }
        ]
    );


    return (<div className="container">
        {
            products.map((p, i, s) => {
                return (
                    <div className="product">
                        <img src={p.pic} alt="" />
                        <h1>{p.Pname} </h1>
                        <h2>{p.brand}, MRP={p.price}</h2>
                    </div>
                )
            })
        }
    </div>);
}
export default DisplayMultipleData;


