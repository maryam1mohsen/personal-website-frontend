const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/blogs`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

const show = async (blogId) => {
  try {
    const res = await fetch(`${BASE_URL}/${blogId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

const create = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(BASE_URL, options);
    return res.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

const remove = async (blogId) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const res = await fetch(`${BASE_URL}/${blogId}`, options);
    return res.json();
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

export { index, show, create, remove };
