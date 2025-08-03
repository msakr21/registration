function LinkRendering(capacity, id, locale) {
  if (capacity) {
    return `/${locale}/enrollments`;
  } else {
    return `/${locale}/enrollments/${id}/students/new`;
  }
}

export default LinkRendering;
