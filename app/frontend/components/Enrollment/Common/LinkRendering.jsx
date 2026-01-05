function LinkRendering(capacity, id, locale, location) {
  if (capacity) {
    return `/${locale}/enrollments?location=${location}`;
  } else {
    return `/${locale}/enrollments/${id}/students/new`;
  }
}

export default LinkRendering;
