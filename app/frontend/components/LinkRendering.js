function linkRendering(capacity, id) {
  if (capacity) {
    return "/enrollments";
  } else {
    return `/enrollments/${id}/students/new`;
  }
};

export default linkRendering;