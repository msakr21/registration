function ShowDeleteModal(type, id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, enrollment = null) {
  if (enrollment === null) {
    setDeletePath(`/admin/enrollments/${id}`);
    setDeleteMessage(`Are you sure you want to delete the enrollment in ${type.location} on ${type.date} at ${type.time}`);
  } else {
    setDeletePath(`/admin/enrollments/${enrollment.id}/students/${id}`);
    setDeleteMessage(`Are you sure you want to remove ${type.first_name} registered at ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
  }
  setDisplayConfirmationModal(true);
};

export default ShowDeleteModal;