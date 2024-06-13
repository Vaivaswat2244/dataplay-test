export default async function getCourses() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASEURL}/course/course_list`);
    if (!res.ok) return false;

    return await res.json();
  } catch (error) {
    console.log(error);
    return;
  }
}
