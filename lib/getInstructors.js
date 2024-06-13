export default async function getMentor() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APIBASEURL}/user/instructor_list`
    );
    if (!res.ok) return false;

    return await res.json();
  } catch (error) {
    console.log(error);
    return false;
  }
}
