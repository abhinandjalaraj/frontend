import axiosConfig from "./Config/AxiosConfig";

export const frontendApi = {
  getHomepage: async () => {
    return await axiosConfig.get("/home/get");
  },
  getShopPage: async () => {
    return await axiosConfig.get("/shop/get");
  },
  getProductByCategoryId: async (id: string) => {
    return await axiosConfig.get(`/shop/get/${id}`)
  },
  getOneProductById: async (id:string) => {
    return await axiosConfig.get(`/shop/get-one/${id}`);
  },
};
