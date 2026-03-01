import axiosConfig from "./AxiosConfig";

/* ===========================
   TYPES (Source of Truth)
=========================== */

export type ShippingDetails = {
  firstname: string;
  lastname: string;
  phnumber: string;
  email: string;
  address: string;
  zipcode: string;
  country: string;
};

export type PlaceOrderPayload = {
  userId: string;
  shippingDetails: ShippingDetails;
  cartItems: {
    quantity: number;
    productId: string;
  }[];
};

export type PlaceOrderResponse = {
  data: {
    data: {
      orderID: string;
    };
  };
};

/* ===========================
   API FUNCTIONS
=========================== */

export const OrderApi = {
  PlaceOrder: async (
    body: PlaceOrderPayload
  ): Promise<PlaceOrderResponse> => {
    const response = await axiosConfig.post(
      "/order/order",
      body
    );

    return response;
  },

  payment: async (id: string) => {
    const response = await axiosConfig.get(
      `/order?orderId=${id}`
    );

    return response.data;
  },
};