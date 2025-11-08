export type THomeCategory = {
  category: THomeCategoryData[];
};

export type THomeCategoryData = {
  _id: string;
  image: string;
  text: string;
};




export type TFeaturedProducts = {//featured comes in array=>then objects
  featured: Tfeatured[];
};
export type Tfeatured = {
  _id: string;
  price: string;
  image: string;
  text: string;
  description: string;

};
