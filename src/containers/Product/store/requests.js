import myAxios from "../../../common/configAPI";

export const getRequestProduct = () => {
    return myAxios.get('https://60c9f839772a760017204e50.mockapi.io/products');
};

export const postRequestProduct = (product) => {
    return myAxios.post(
        'https://60c9f839772a760017204e50.mockapi.io/products',
        product.productName,
        product.stat
    )
};
