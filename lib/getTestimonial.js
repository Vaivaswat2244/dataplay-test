export default async function getTestimonial() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIBASEURL}/testimonial/testimonial_list`
    );
    if (!res.ok) throw Error("Something went wrong...");

    return await res.json();
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}
