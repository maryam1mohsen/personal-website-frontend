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

    // Handle non-2xx responses as errors
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to send inquiry');
    }

    // Return the parsed JSON response
    return await res.json();
  } catch (error) {
    console.error("Error sending inquiry:", error.message);
    throw error;
  }
};

export { create };
