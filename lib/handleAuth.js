export const handleAuth = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASEURL}/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await res.json();
        setResponse(result);
      } catch (error) {
        console.error('Error:', error);
      }
};
