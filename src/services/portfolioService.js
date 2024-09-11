const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/portfolios`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    throw error;
  }
};

const show = async (portfolioId) => {
  try {
    const res = await fetch(`${BASE_URL}/${portfolioId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching portfolio:", error);
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
    console.error("Error creating portfolio:", error);
    throw error;
  }
};

const remove = async (portfolioId) => {
  try {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const res = await fetch(`${BASE_URL}/${portfolioId}`, options);
    return res.json();
  } catch (error) {
    console.error("Error deleting portfolio:", error);
    throw error;
  }
};

export { index, show, create, remove };
