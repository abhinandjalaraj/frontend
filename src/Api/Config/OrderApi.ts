import axiosConfig from "./AxiosConfig";


export const OrderApi = {
  PlaceOrder: async (body: any) => {
    return await axiosConfig.post("/order/order", body);
  },
  payment: async function (id: string) {
    try {
      const response = await axiosConfig.get(`/order?orderId=${id}`);
      return response.data;
    } catch (error) {
      console.log("error::", error);
    }
    // return await axiosConfig.get(`/order?orderId=${id}`)
  },
};
