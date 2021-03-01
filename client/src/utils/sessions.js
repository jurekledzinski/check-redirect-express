import request from "../helpers/request";

export const fetchCourses = async () => {
  const { data, status } = await request.get("/courses");

  return { data, status };
};

export const updateManyCourses = async (orders) => {
  await request.put("/courses/update-courses", orders);
};

export const registration = async (user) => {
  const { data, status } = await request.post("/register/user", user);

  return { data, status };
};

export const signIn = async (user) => {
  const { data, status } = await request.post("/login", user);
  return { data, status };
};

export const checkIsUserLogIn = async () => {
  const { data } = await request.get("/user");

  return data;
};

export const logOutUser = async () => {
  await request.delete("/user/logout");
};

export const updateProfileUserData = async (userData) => {
  const { data, status } = await request.put(`/user-profile/`, userData);

  return { data, status };
};

export const addNewCourse = async (newCourse) => {
  const { data, status } = await request.post("/courses/add-new", newCourse);

  return { data, status };
};

export const removeCourse = async (id) => {
  const { data, status } = await request.delete(`/courses/delete/${id}`);

  return { data, status };
};

export const downloadAllUsers = async () => {
  const { data, status } = await request.get("/users");

  return { data, status };
};

export const removeUser = async (id) => {
  const { data, status } = await request.delete(`/users/delete/${id}`);

  return { data, status };
};

export const updateCourse = async (course) => {
  const { data, status } = await request.put(
    `/courses/update/${course._id}`,
    course
  );

  return { data, status };
};

export const createCartMongo = async (cartData) => {
  const { data } = await request.put("/shopping-cart", cartData);

  return { data };
};

export const getCartFromMongo = async (id) => {
  const { data, status } = await request.get(`/shopping-cart/${id}`);

  return { data, status };
};

export const deleteCartFromMongo = async (id) => {
  const { data, status } = await request.delete(`/shopping-cart/delete/${id}`);

  return { data, status };
};

export const createCustomerCommentProduct = async (comment) => {
  const { data, status } = await request.post("/customer-review", comment);

  return { data, status };
};

export const downloadCustomersReviews = async (id) => {
  const { data, status } = await request.get(`/customer-review/${id}`);

  return { data, status };
};

export const removeCustomersReviews = async (id) => {
  const { data, status } = await request.delete(`/customer-review/${id}`);

  return { data, status };
};

export const saveShippingDetails = async (customerData) => {
  const { data, status } = await request.put("/order-details", customerData);

  return { data, status };
};

export const downloadCustomerDetails = async (id) => {
  const { data, status } = await request.get(`/order-details/${id}`);

  return { data, status };
};

export const saveOrderPaidByCustomer = async (order) => {
  const { data, status } = await request.post("/order-paid", order);

  return { data, status };
};

export const downloadPaidOrder = async (id) => {
  const { data, status } = await request.get(`/order-paid/${id}`);

  return { data, status };
};

export const downloadAllPaidOrdersCustomers = async () => {
  const { data, status } = await request.get(`/order-paid`);

  return { data, status };
};

export const updadeCustomerPaidOrder = async (orderPaid) => {
  const { data, status } = await request.put(`/order-paid`, orderPaid);

  return { data, status };
};

export const removeCustomerPaidOrder = async (id) => {
  const { data, status } = await request.delete(`/order-paid/${id}`);

  return { data, status };
};

export const fetchAdvertSlider = async () => {
  const { data, status } = await request.get(`/add-advertise`);

  return { data, status };
};

export const addAdvertSlider = async (advertise) => {
  const { data, status } = await request.post(`/add-advertise`, advertise);

  return { data, status };
};

export const removeAdvertSlider = async (id) => {
  const { data, status } = await request.delete(`/add-advertise/${id}`);

  return { data, status };
};

export const advertOptionFetch = async () => {
  const { data, status } = await request.get("/advert-choice");

  return { data, status };
};

export const advertOptionCreate = async (choice) => {
  const { data, status } = await request.put("/advert-choice", choice);

  return { data, status };
};
