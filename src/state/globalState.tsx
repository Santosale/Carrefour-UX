interface IGlobalState {
    old_price: string;
    new_price: string;
    description_offert: string;
    name_product: string;
    url_image_small: string;
    url_image_big: string;
    value_kj: string;
    value_kcal: string;
    measure_map: string[];
    description_ingredients: string;
    brand_value: string;
    measure_value: string;
    product_datas_values: string[];
    measures_product_food_information: string[];
    datas_of_product: string[];
    nutrients: string[];
    brand_values: string[];
    title_food_information: string;
    title_ingredient_information: string;
    nutritional_information_title: string;
    more_information_title: string;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    old_price: "4.47€",
    new_price: "4.29€",
    description_offert: "Comprando 3 unidades, te regalamos la unidad de menor importe. Válido de 01/01/2020 a 16/01/2020.",
    name_product: "Aceite de oliva virgen extra Dcoop 1 l.",
    url_image_small: "https://static.carrefour.es/hd_280x_/img_pim_food/958684_00_1.jpg",
    url_image_big: "https://static.carrefour.es/hd_560x_/img_pim_food/958684_00_1.jpg",
    value_kj: "3768.12",
    value_kcal: "900",
    measure_map: ["100g", "13g", "0g", "0g", "0g", "0g"],
    description_ingredients: "aceite de oliva de categoría superior obtenido directamente de aceitunas y solo mediante procedimientos mecánicos.",
    brand_value: "DCOOP",
    measure_value: "Cantidad neta del alimento: 1000.",
    product_datas_values: ["Nombre del operador de la empresa alimentaria: Carrefour", "Denominación del alimento: Aceite de oliva virgen extra", "Dirección del operador/importador: CR DE CORDOBA, 29200, MALAGA", "Nombre del importador: MERCAOLEO, SL"],
    measures_product_food_information: ["Cantidad neta del alimento:1000 Mililitros"],
    datas_of_product: ["Denominación del alimento:", "Aceite de oliva virgen extra","Nombre del operador de la empresa alimentaria:", "Carrefour","Nombre del importador:", "MERCAOLEO, SL","Dirección del operador/importador:", "CR DE CORDOBA, 29200, MALAGA"],
    nutrients: ["Valor Energético","900 Kcal","Valor Energético","3768.12 kJ","Grasas","100 g","Saturadas","13 g","Hidratos de carbono","0 g","Azúcares","0g","Proteínas","0g","Sal","0g"],
    brand_values: ["DCOOP"],
    title_food_information: "Información Alimentaria",
    title_ingredient_information: "Descripción del producto",
    nutritional_information_title: "Información nutricional",
    more_information_title: "Más Información"
}