const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/contactMe`;

const create = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(BASE_URL, options);
    return res.json();
  } catch (error) {
    console.error("Error sending inquiry:", error);
    throw error;
  }
};

export { create };
