const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/comments`;

const indexByBlogId = async (blogId) => {
  try {
    const res = await fetch(`${BASE_URL}/blog/${blogId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching comments for blog:", error);
    throw error;
  }
};

const create = async (blogId, formData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${BASE_URL}/blog/${blogId}`, options);
    return res.json();
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error;
  }
};

export { indexByBlogId, create };
